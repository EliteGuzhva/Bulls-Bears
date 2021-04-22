from typing import List, Mapping


class LessonCollection:
    _collection: Mapping[str, List[str]]  # map<level_id, list<lesson_id>>

    def __init__(self, collection: Mapping[str, List[str]]):
        self._collection = collection
