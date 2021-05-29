import yfinance as yf
from typing import List

class TickerWarehouse:

    _asset_info = {}
    _asset_history = {}
    _asset_set = set()


    _preimport = ["AAPL", "MSFT", "AMZN", "KO", "NKE"]

    def __init__(self):
        self._import_start(self._preimport)

    def import_asset(self, ticker_string:str):
        if ticker_string not in self._asset_set:
            ticker = yf.Ticker(ticker_string)
            self._asset_info[ticker_string] = ticker
            self._asset_history[ticker_string] = ticker.history(period="max", interval="1d")


    def _import_start(self, array_preimport: List):
        for ticker_string in array_preimport:
            self.import_asset(ticker_string)

    def get_all_history(self):
        return self._asset_history
