from typing import List
from pymongo import MongoClient

from src.database.idatabase import IDatabase
from src.model.lesson import Lesson
from src.model.user import User


class DatabaseMongoImpl(IDatabase):
    def __init__(self):
        cluster = MongoClient(
            "mongodb+srv://dbAdmin:StonkApps2021@cluster0.ww5af.mongodb.net/bulls-bears?retryWrites=true&w"
            "=majority")
        db = cluster["bulls-bears"]
        self._lessons_collection = db["lessons"]
        self._users_collection = db["users"]

    def get_user(self, uid: str) -> User:
        result = self._users_collection.find_one({"_id": uid})

        return User.from_json(result)

    def authorize_user(self, login: str, name: str, surname: str, email: str, password: str, photo_url: str) -> User:
        # TODO
        pass

    def get_lesson(self, uid: str) -> Lesson:
        result = self._lessons_collection.find_one({"_id": uid})

        return Lesson.from_json(result)

    def get_all_lessons(self) -> List[Lesson]:
        results = self._lessons_collection.find({})

        return [Lesson.from_json(result) for result in results]

    def get_lessons_for_level(self, level_name: str) -> List[Lesson]:
        results = self._lessons_collection.find({"level_name": level_name})

        return [Lesson.from_json(result) for result in results]
