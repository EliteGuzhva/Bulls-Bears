from typing import List, Optional

from pymongo import MongoClient
from bson.objectid import ObjectId

from .idatabase import IDatabase
from ..model.user import User
from ..model.lesson import Lesson
from ..model.lesson_data import LessonData
from ..model.transaction import Transaction, OperationType


class DatabaseMongoImpl(IDatabase):
    def __init__(self):
        cluster = MongoClient(
            "mongodb+srv://dbAdmin:StonkApps2021@cluster0.ww5af.mongodb.net/bulls-bears?retryWrites=true&w"
            "=majority")
        db = cluster["bulls-bears"]
        self._lessons_collection = db["lessons"]
        self._users_collection = db["users"]
        self._data_collection = db["data"]

    # auth
    def get_user(self, uid: str) -> Optional[User]:
        result = self._users_collection.find_one(ObjectId(uid))
        if result is None:
            return None

        return User.from_json(result)

    def get_user_with_username(self, username: str) -> Optional[User]:
        result = self._users_collection.find_one({"username": username})
        if result is None:
            return None

        return User.from_json(result)

    def authorize_user(self, username: str, email: str, password: str) -> Optional[User]:
        user = User(username, email, password, "", "", None, None)
        inserted_user = self._users_collection.insert_one(user.to_json())
        user.set_user_id(str(inserted_user.inserted_id))

        return user

    # education
    def get_lesson(self, uid: str) -> Optional[Lesson]:
        result = self._lessons_collection.find_one(ObjectId(uid))
        if result is None:
            return None

        return Lesson.from_json(result)

    def get_all_lessons(self) -> List[Lesson]:
        results = self._lessons_collection.find({})

        return [Lesson.from_json(result) for result in results]

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        results = self._lessons_collection.find({"level_name": level_name})

        return [Lesson.from_json(result) for result in results]

    def get_lesson_data(self, uid: str) -> Optional[LessonData]:
        result = self._data_collection.find_one(ObjectId(uid))
        if result is None:
            return None

        return LessonData.from_json(result)

    # sandbox
    def sandbox_init(self, user_id: str, virtual_start: str, balance: float) -> Optional[User]:
        self._users_collection.update_one({'_id': ObjectId(user_id)},
                                          {'$set': {
                                              'sandbox_data.virtual_start': virtual_start,
                                              'sandbox_data.virtual_current': virtual_start,
                                              'sandbox_data.balance': balance,
                                              'sandbox_data.assets': []
                                          }}, upsert=False)

        return self.get_user(user_id)

    def sandbox_step(self, user_id: str, virtual_current: str) -> Optional[User]:
        self._users_collection.update_one({'_id': ObjectId(user_id)},
                                          {'$set': {
                                              'sandbox_data.virtual_current': virtual_current,
                                          }}, upsert=False)

        return self.get_user(user_id)

    def sandbox_transaction(self, user_id: str, ticker: str, price: float, amount: int,
                            operation_type: str) -> Optional[User]:
        user = self.get_user(user_id)
        if user is None:
            return None

        sandbox_data = user.sandbox_data

        commission = 0.0  # WARNING! HARDCODE
        transaction = Transaction(amount, price, commission, sandbox_data.virtual_current, OperationType.from_string(operation_type))

        did_apply = sandbox_data.apply_transaction(ticker, transaction)

        if did_apply:
            self._users_collection.update_one({'_id': ObjectId(user_id)},
                                              {'$set': {
                                                  'sandbox_data': sandbox_data.to_json(),
                                              }}, upsert=False)

        return self.get_user(user_id)
