import unittest
from src.ticker_warehouse.ticker_warehouse import TickerWarehouse

def test_ticker_warehouse():
    test_ticker_warehouse = TickerWarehouse()
    all_history = test_ticker_warehouse.get_all_history()
    print(all_history)
