import unittest
import json
from datetime import datetime

from src.ticker_warehouse.ticker_warehouse import TickerWarehouse


def test_ticker_warehouse():
    test_instance_ticker_warehouse = TickerWarehouse()

    df_apple_data = test_instance_ticker_warehouse.get_ticker_history("AAPL")

    assert df_apple_data is not None


def test_ticker_warehouse_range():
    test_ticker_warehouse = TickerWarehouse()

    apple_data_in_range_df = test_ticker_warehouse.get_ticker_history_in_range_df("AAPL", 345427200, 346427200)
    apple_data_in_range_json = test_ticker_warehouse.get_ticker_history_in_range_json("AAPL", 345427200, 346427200)

    parsed_apple_data_in_range_json = json.loads(apple_data_in_range_json)

    print("DF:\n", apple_data_in_range_df)
    print("JSON:\n", json.dumps(parsed_apple_data_in_range_json, indent=4))


def test_get_invalid_ticker():
    test_instance_ticker_warehouse = TickerWarehouse()
    test_none = test_instance_ticker_warehouse.get_ticker_history("AAAAAAAAAA")
    assert test_none is None


def test_get_tickers_set():
    test_ticker_warehouse = TickerWarehouse()
    print(test_ticker_warehouse.get_tickers_set())

