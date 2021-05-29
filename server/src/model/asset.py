from typing import List

from .transaction import Transaction


class Asset:
    _ticker: str = ""
    _amount: int = 0
    _transactions: List[Transaction] = []

    def __init__(self, ticker: str, amount: int, transactions: List[Transaction]):
        self._ticker = ticker
        self._amount = amount
        self._transactions = transactions

    @classmethod
    def from_json(cls, json_data):
        ticker = json_data["ticker"]
        amount = json_data["amount"]
        transactions = [Transaction.from_json(t) for t in json_data["transactions"]]

        return cls(ticker, amount, transactions)

    @classmethod
    def dummy(cls):
        return cls("", 0, [])
