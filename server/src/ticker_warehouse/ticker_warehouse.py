import yfinance as yf
import pandas as pd
from typing import Dict, List

class TickerWarehouse:

    _ticker_info = {}
    _ticker_history:Dict[str, pd.DataFrame] = {}
    _ticker_set = set()


    _preimport = ["AAPL", "MSFT", "AMZN", "KO", "NKE"]

    def __init__(self):
        self._import_start(self._preimport)

    def import_ticker(self, ticker_string:str):
        if ticker_string not in self._ticker_set:
            ticker = yf.Ticker(ticker_string)
            self._ticker_info[ticker_string] = ticker
            self._ticker_history[ticker_string] = ticker.history(period="max", interval="1d")
            self._ticker_set.add(ticker_string)


    def _import_start(self, array_preimport: List):
        for ticker_string in array_preimport:
            self.import_ticker(ticker_string)

    def get_all_history(self):
        return self._ticker_history

    def get_all_ticker_history(self, ticker_name: str):
        return self._ticker_history[ticker_name]

    def get_all_ticker_history_as_json(self, ticker_name:str):
        return self.get_all_ticker_history(ticker_name).to_json(orient="index")