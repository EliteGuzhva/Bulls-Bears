import unittest

from src.model.sandboxdata import SandboxData
from src.model.asset import Asset
from src.model.transaction import Transaction, OperationType


virtual_start: str = '345427200'


def init_sandbox() -> SandboxData:
    return SandboxData(virtual_start, virtual_start, 1000, [])

def add_to_virtual_start(value: int) -> str:
    return str(int(virtual_start) + value)

def test_step():
    sandbox_data = init_sandbox()
    sandbox_data.virtual_current = add_to_virtual_start(100)
    assert(sandbox_data.virtual_current == '345427300')


transactions = [
    {"ticker": "AAPL", "transaction": Transaction(3, 200, 1.67, virtual_start, OperationType.SELL)},
    {"ticker": "AAPL", "transaction": Transaction(2, 249, 2, add_to_virtual_start(100), OperationType.BUY)},
    {"ticker": "AAPL", "transaction": Transaction(1000, 315, 3, add_to_virtual_start(200), OperationType.BUY)},
    {"ticker": "AAPL", "transaction": Transaction(2, 315, 3, add_to_virtual_start(200), OperationType.SELL)}
]


def test_transactions():
    sandbox_data = init_sandbox()

    # sell something that you don't have
    res = sandbox_data.apply_transaction(**transactions[0])
    assert res == False

    # apply transaction that will happen in the future
    res = sandbox_data.apply_transaction(**transactions[1])
    assert res == False

    # step forward
    sandbox_data.virtual_current = add_to_virtual_start(100)

    # buy new asset
    res = sandbox_data.apply_transaction(**transactions[1])
    assert res == True
    assert sandbox_data.balance == 1000 - 249*2 - 2
    assert len(sandbox_data.assets) == 1
    assert sandbox_data.assets[0].ticker == transactions[1]["ticker"]
    assert sandbox_data.assets[0].amount == transactions[1]["transaction"].amount
    assert len(sandbox_data.assets[0].transactions) == 1

    # step forward
    sandbox_data.virtual_current = add_to_virtual_start(200)

    # not enough balance to buy
    res = sandbox_data.apply_transaction(**transactions[2])
    assert res == False

    # sell existing asset
    res = sandbox_data.apply_transaction(**transactions[3])
    assert res == True
    assert sandbox_data.balance == 1000 - 249*2 - 2 + 315*2 - 3
    assert len(sandbox_data.assets) == 1
    assert sandbox_data.assets[0].ticker == transactions[1]["ticker"]
    assert sandbox_data.assets[0].amount == 0
    assert len(sandbox_data.assets[0].transactions) == 2

