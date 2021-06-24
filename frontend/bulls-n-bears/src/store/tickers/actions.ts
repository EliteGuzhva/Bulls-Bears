import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SetTickerData, TickersActionType } from './action-types';
import { GetTickerResponse, TickerData } from './types';
import { mapGetTickerResponseToTickerDataArray } from './utils/map-rest-to-model';

const API_URL = process.env.REACT_APP_SERVER_URL;

export const setTickerData = (
  tickerName: string,
  tickerData: TickerData[]
): SetTickerData => ({
  type: TickersActionType.SetTickerData,
  tickerData,
  tickerName,
});

export const getAllTickerHistory = (
  tickerName: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  const response = await fetch(
    `${API_URL}/fin/get_all_ticker_history?ticker=${tickerName}`
  );

  const responseJson: GetTickerResponse = await response.json();
  dispatch(
    setTickerData(
      tickerName,
      mapGetTickerResponseToTickerDataArray(responseJson)
    )
  );
};
