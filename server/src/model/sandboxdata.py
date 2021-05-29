from typing import List

from .asset import Asset


class SandboxData:
    _virtual_start: str = ""
    _virtual_current: str = ""
    _balance: float = 0.0
    _assets: List[Asset] = []

    def __init__(self, virtual_start: str, virtual_current: str, balance: float, assets: List[Asset]):
        self._virtual_start = virtual_start
        self._virtual_current = virtual_current
        self._balance = balance
        self._assets = assets

    @classmethod
    def from_json(cls, json_data):
        virtual_start = json_data["virtual_start"]
        virtual_current = json_data["virtual_current"]
        balance = json_data["balance"]
        assets = [Asset.from_json(a) for a in json_data["assets"]]

        return cls(virtual_start, virtual_current, balance, assets)

    @classmethod
    def dummy(cls):
        return cls("", "", 0.0, [])

    def to_json(self):
        json_data = {
            "virtual_start": self._virtual_start,
            "virtual_current": self._virtual_current,
            "balance": self._balance,
            "assets": [a.to_json() for a in self._assets]
        }

        return json_data
