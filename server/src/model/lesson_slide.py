from typing import List


class LessonSlide:
    _text: str = ""
    _media: List[str] = []
    _slide_number: int = 0

    def __init__(self, text: str, media: List[str],
                 slide_number: int):
        self._text = text
        self._media = media
        self._slide_number = slide_number

    @classmethod
    def from_json(cls, json_data):
        text = json_data["text"]
        media = json_data["media"]
        slide_number = json_data["slide_number"]

        return cls(text, media, slide_number)

    @classmethod
    def dummy(cls):
        return cls("", [], -1)
