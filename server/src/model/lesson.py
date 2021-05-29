class Lesson:
    _level_name: str = ""
    _index: int = -1  # lesson index in a level
    _title: str = ""
    _description: str = ""
    _data: str = "" # id of lesson_data
    _id: str = ""

    def __init__(self, level_name: str, index: int, title: str,
                 description: str, data: str, uid: str):
        self._level_name = level_name
        self._index = index
        self._title = title
        self._description = description
        self._data = data
        self._id = uid

    @classmethod
    def from_json(cls, json_data):
        level_name = json_data["level_name"]
        index = json_data["index"]
        title = json_data["title"]
        description = json_data["description"]
        data = str(json_data["data"])
        uid = str(json_data["_id"])

        return cls(level_name, index, title, description, data, uid)

    @classmethod
    def dummy(cls):
        return cls("", -1, "", "", "", "")

    def to_json(self):
        json_data = {
            "level_name": self._level_name,
            "index": self._index,
            "title": self._title,
            "description": self._description,
            "data": self._data,
            "_id": self._id
        }

        return json_data
