from typing import List

from .lesson_slide import LessonSlide


class LessonData:
    _slides: List[LessonSlide] = []
    _id: str = ""

    def __init__(self, slides: List[LessonSlide], uid: str):
        self._slides = slides
        self._id = uid

    @classmethod
    def from_json(cls, json_data):
        slides = [LessonSlide.from_json(s) for s in json_data["slides"]]
        uid = json_data["_id"]

        return cls(slides, uid)

    @classmethod
    def dummy(cls):
        return cls([], "")
