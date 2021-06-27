from flask import Blueprint, request

from . import util
from ..ticker_warehouse.ticker_warehouse import TickerWarehouse

bp = Blueprint('fin', __name__, url_prefix='/fin')
tw = TickerWarehouse()

@bp.route('/get_available_tickers')
def get_available_tickers():
    return {"tickers": list(tw.get_tickers_set())}

@bp.route('/get_existing_tickers')
def get_existing_tickers():
    time: int = int(str(request.args.get("time")))
    return {"tickers": list(tw.get_available_tickers_set(time))}

@bp.route('/get_all_ticker_history')
def get_all_ticker_history():
    ticker: str = str(request.args.get("ticker"))
    json_data = tw.get_ticker_history_as_json(ticker)
    if json_data is None:
        return util.message_to_json("Ticker history not Found"), 404

    return json_data

@bp.route('/get_ticker_history')
def get_ticker_history():
    ticker: str = str(request.args.get("ticker"))
    begin: int = int(str(request.args.get("begin")))
    end: int = int(str(request.args.get("end")))

    json_data = tw.get_ticker_history_in_range_json(ticker, begin, end)
    if json_data is None:
        return util.message_to_json("Ticker history not Found"), 404

    return json_data
