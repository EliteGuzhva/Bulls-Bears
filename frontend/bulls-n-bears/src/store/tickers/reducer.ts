import { Action, TickersActionType } from './action-types';
import { initialState, State } from './types';

export const tickers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case TickersActionType.SetTickerData:
      return {
        ...state,
        tickersData: {
          ...state.tickersData,
          [action.tickerName]: action.tickerData,
        },
      };
    default:
      return state;
  }
};
