from flask import Blueprint, request

from . import util
from ..ticker_warehouse.ticker_warehouse import TickerWarehouse

bp = Blueprint('fin', __name__, url_prefix='/fin')
tw = TickerWarehouse()

# TODO: call tw
@bp.route('/get_available_tickers')
def get_available_tickers():
    return {"tickers": ["AAPL", "MSFT"]}

@bp.route('/get_all_ticker_history')
def get_all_ticker_history():
    ticker: str = str(request.args.get("ticker"))
    json_data = tw.get_ticker_history_as_json(ticker)
    if json_data is None:
        return util.message_to_json("Ticker history not Found"), 404

    return json_data

# TODO: call tw
@bp.route('/get_ticker_history')
def get_ticker_history():
    ticker: str = str(request.args.get("ticker"))
    begin: str = str(request.args.get("begin"))
    end: str = str(request.args.get("end"))

    return {"ticker": ticker, "begin": begin, "end": end}
