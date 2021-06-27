from datetime import datetime
import json
import os

import yfinance as yf
import pandas as pd
from typing import Dict, List, Optional

from pandas import Series


class TickerWarehouse:

    _ticker_info = {}
    _ticker_history: Dict[str, pd.DataFrame] = {}
    _ticker_set = set()

    _load_file = "ticker_list.json"

    def __init__(self):
        self._import_start()

    def _import_ticker(self, ticker_string: str):
        if ticker_string not in self._ticker_set:
            ticker = yf.Ticker(ticker_string)
            # todo: can be deleted for speed
            self._ticker_info[ticker_string] = ticker
            self._ticker_history[ticker_string] = ticker.history(period="max", interval="1d")
            self._ticker_set.add(ticker_string)

    # for initialization
    def _import_start(self):
        cur_dir = os.path.dirname(__file__)
        file_open = os.path.join(cur_dir, self._load_file)
        with open(file_open) as json_file:
            json_data = json.load(json_file)
            for ticker_string in json_data["Tickers"]:
                self._import_ticker(ticker_string)

    # tickers set
    def get_tickers_set(self) -> set:
        return self._ticker_set

    def get_available_tickers_set(self, time, is_timestamp: bool = True) -> set:
        if is_timestamp:
            time = datetime.fromtimestamp(time)
        retval = set()
        for key, value in self._ticker_history.items():
            if (value.loc[:time].shape[0] > 0):
                retval.add(key)
        return retval


    # get dictionary of all tickers str->DataFrame
    def get_all_history(self) -> Dict[str, pd.DataFrame]:
        return self._ticker_history

    def get_ticker_history_in_range_df(self, ticker_name: str, start, finish, is_timestamp: bool = True) -> Optional[pd.DataFrame]:
        if(ticker_name not in self._ticker_set):
            #todo: log
            return None

        datetime_start = start
        datetime_finish = finish

        if is_timestamp:
            datetime_start = datetime.fromtimestamp(start).date()
            datetime_finish = datetime.fromtimestamp(finish).date()

        retval_df = self._ticker_history[ticker_name].loc[datetime_start:datetime_finish]
        return retval_df

    def get_ticker_history_in_range_json(self, ticker_name: str, start, finish, is_timestamp: bool = True) -> Optional[str]:
        df_ans = self.get_ticker_history_in_range_df(ticker_name, start, finish, is_timestamp)
        if(df_ans is None):
            return None
        return df_ans.to_json(orient="index", date_unit="s")

    def get_ticker_history(self, ticker_name: str) -> Optional[pd.DataFrame]:
        return self.get_ticker_history_in_range_df(ticker_name, "1700-01-01", "2050-01-01", is_timestamp=False)

    def get_ticker_history_as_json(self, ticker_name: str) -> Optional[str]:
        return self.get_ticker_history_in_range_json(ticker_name, "1700-01-01", "2050-01-01", is_timestamp=False)

    def get_data_for_ticker_at_time_as_json(self, ticker_name: str, time, is_timestamp: bool = True) -> Optional[str]:
        single_frame = self.get_ticker_history_in_range_df(ticker_name, time, time, is_timestamp=is_timestamp)
        if (single_frame.size != 7):
            return None
        return single_frame.iloc[0].to_json(orient="index")