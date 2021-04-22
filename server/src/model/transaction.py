from enum import Enum


class OperationType(Enum):
    BUY = 0
    SELL = 1

    @classmethod
    def from_string(cls, value: str):
        if value == "BUY":
            return cls.BUY
        elif value == "SELL":
            return cls.SELL
        else:
            return cls.BUY


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

    @classmethod
    def from_json(cls, json_data):
        amount = json_data["amount"]
        price = json_data["price"]
        commission = json_data["commission"]
        timestamp = json_data["timestamp"]
        operation_type = OperationType.from_string(json_data["operation_type"])

        return cls(amount, price, commission, timestamp, operation_type)
