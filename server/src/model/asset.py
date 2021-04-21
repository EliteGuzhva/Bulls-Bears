from typing import List

from src.model.transaction import Transaction


class Asset:
    _ticker: str = ""
    _figi: str = ""
    _amount: int = 0
    _transactions: List[Transaction] = []

    def __init__(self, ticker: str, figi: str, amount: int, transactions: List[Transaction]):
        self._ticker = ticker
        self._figi = figi
        self._amount = amount
        self._transactions = transactions

