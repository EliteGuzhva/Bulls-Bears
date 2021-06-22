from typing import List, Optional

from .asset import Asset
from .transaction import Transaction, OperationType


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

    @property
    def virtual_current(self) -> str:
        return self._virtual_current

    @virtual_current.setter
    def virtual_current(self, value: str):
        self._virtual_current = value

    @property
    def balance(self) -> float:
        return self._balance

    @balance.setter
    def balance(self, value: float):
        self._balance = value

    @property
    def assets(self) -> List[Asset]:
        return self._assets

    @classmethod
    def from_json(cls, json_data):
        if json_data is None:
            return None

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

    def apply_transaction(self, ticker: str, transaction: Transaction) -> bool:
        if int(transaction.timestamp) > int(self._virtual_current):
            return False

        current_asset: Optional[Asset] = None
        for asset in self._assets:
            if asset.ticker == ticker:
                current_asset = asset
                break

        if transaction.operation_type == OperationType.SELL:
            if current_asset is None or current_asset.amount < transaction.amount:
                return False

            current_asset.amount -= transaction.amount

        if transaction.operation_type == OperationType.BUY:
            if self._balance + transaction.sum() < 0:
                return False

            if current_asset is None:
                current_asset = Asset(ticker, 0, [])
                self._assets.append(current_asset)

            current_asset.amount += transaction.amount


        current_asset.add_transaction(transaction)
        for asset in self._assets:
            if asset.ticker == ticker:
                asset = current_asset

        self._balance += transaction.sum()

        return True
