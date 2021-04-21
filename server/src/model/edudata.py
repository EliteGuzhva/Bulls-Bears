from typing import List


class EduData:
    _score: int = 0
    _in_progress: List[str] = [] # maybe LessonProgress class?
    _done: List[str] = []
    _id: str = ""

    def __init__(self, score: int, in_progress: List[str], done: List[str], uid: str):
        self._score = score
        self._in_progress = in_progress
        self._done = done
        self._id = uid

