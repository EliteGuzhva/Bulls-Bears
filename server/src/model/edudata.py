from typing import List


class EduData:
    _score: int = 0
    _in_progress: List[str] = []  # maybe LessonProgress class?
    _done: List[str] = []
    _id: str = ""

    def __init__(self, score: int, in_progress: List[str], done: List[str], uid: str):
        self._score = score
        self._in_progress = in_progress
        self._done = done
        self._id = uid

    @classmethod
    def from_json(cls, json_data):
        score = json_data["score"]
        in_progress = json_data["in_progress"]
        done = json_data["done"]
        uid = json_data["_id"]

        return cls(score, in_progress, done, uid)
