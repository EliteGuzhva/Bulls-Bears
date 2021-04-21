class Lesson:
    _title: str = ""
    _description: str = ""
    _data: str = "" # path to json???
    _id: str = ""

    def __init__(self, title: str, description: str, data: str, uid: str):
        self._title = title
        self._description = description
        self._data = data
        self._id = uid

