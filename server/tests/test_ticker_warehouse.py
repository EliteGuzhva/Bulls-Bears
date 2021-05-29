import unittest
import json
from src.ticker_warehouse.ticker_warehouse import TickerWarehouse

def test_ticker_warehouse():
    test_ticker_warehouse = TickerWarehouse()
    all_history = test_ticker_warehouse.get_all_history()
    test_ticker_warehouse.import_ticker("AAPL")
    df_apple_data = test_ticker_warehouse.get_all_ticker_history("AAPL")
    print(df_apple_data)

    json_apple_data = test_ticker_warehouse.get_all_ticker_history_as_json("AAPL")
    print(json_apple_data)

    parsed_json = json.loads(json_apple_data)
    json.dumps(parsed_json, indent=4)