from enum import Enum


class OperationType(Enum):
    BUY = 0
    SELL = 1


class Transaction:
    _amount: int = 0
    _price: float = 0.0
    _commission: float = 0.0
    _timestamp: str = ""
    _operation_type: OperationType = OperationType.BUY

    def __init__(self, amount: int, price: float, commission: float, timestamp: str, operation_type: OperationType):
        self._amount = amount
        self._price = price
        self._commission = commission
        self._timestamp = timestamp
        self._operation_type = operation_type

