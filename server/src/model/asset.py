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

    @property
    def ticker(self) -> str:
        return self._ticker

    @property
    def amount(self) -> int:
        return self._amount

    @amount.setter
    def amount(self, value: int):
        self._amount = value

    @property
    def transactions(self) -> List[Transaction]:
        return self._transactions

    def add_transaction(self, transaction: Transaction):
        self._transactions.append(transaction)

    @classmethod
    def from_json(cls, json_data):
        ticker = json_data["ticker"]
        amount = json_data["amount"]
        transactions = [Transaction.from_json(t) for t in json_data["transactions"]]

        return cls(ticker, amount, transactions)

    @classmethod
    def dummy(cls):
        return cls("", 0, [])

    def to_json(self):
        json_data = {
            "ticker": self._ticker,
            "amount": self._amount,
            "transactions": [t.to_json() for t in self._transactions]
        }

        return json_data
