from typing import List, Optional

from pymongo import MongoClient
from bson.objectid import ObjectId

from .idatabase import IDatabase
from ..model.user import User
from ..model.lesson import Lesson
from ..model.lesson_data import LessonData


class DatabaseMongoImpl(IDatabase):
    def __init__(self):
        cluster = MongoClient(
            "mongodb+srv://dbAdmin:StonkApps2021@cluster0.ww5af.mongodb.net/bulls-bears?retryWrites=true&w"
            "=majority")
        db = cluster["bulls-bears"]
        self._lessons_collection = db["lessons"]
        self._users_collection = db["users"]
        self._data_collection = db["data"]

    def get_user(self, uid: str) -> Optional[User]:
        result = self._users_collection.find_one(ObjectId(uid))
        if result is None:
            return None

        return User.from_json(result)

    def authorize_user(self, login: str, name: str, surname: str, email: str, password: str, photo_url: str) -> User:
        # TODO
        return User.dummy()

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
