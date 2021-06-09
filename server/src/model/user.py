from typing import Optional

from ..model.sandboxdata import SandboxData
from ..model.edudata import EduData


class User:
    _username: str = ""
    _email: str = ""
    _password: str = ""
    _id: str = ""
    _token: str = ""
    _edu_data: EduData = EduData.dummy()
    _sandbox_data: SandboxData = SandboxData.dummy()

    def __init__(self, username: str, email: str, password: str, uid: str, token: str,
                 edu_data: Optional[EduData], sandbox_data: Optional[SandboxData]):
        self._username = username
        self._email = email
        self._password = password
        self._id = uid
        self._token = token
        if edu_data is not None:
            self._edu_data = edu_data
        if sandbox_data is not None:
            self._sandbox_data = sandbox_data

    @property
    def password_hash(self):
        return self._password

    @property
    def user_id(self):
        return self._id

    def set_user_id(self, uid: str):
        self._id = uid

    @classmethod
    def from_json(cls, json_data):
        username = json_data["username"]
        email = json_data["email"]
        password = json_data["password"]
        uid = str(json_data["_id"])
        token = json_data["token"]
        edu_data = EduData.from_json(json_data["edu_data"])
        sandbox_data = SandboxData.from_json(json_data["sandbox_data"])

        return cls(username, email, password, uid, token,
                   edu_data, sandbox_data)

    @classmethod
    def dummy(cls):
        return cls("", "", "", "", "", None, None)

    def to_json(self):
        json_data = {
            "username": self._username,
            "email": self._email,
            "password": self._password,
            "token": self._token,
            "edu_data": self._edu_data.to_json(),
            "sandbox_data": self._sandbox_data.to_json()
        }

        return json_data
