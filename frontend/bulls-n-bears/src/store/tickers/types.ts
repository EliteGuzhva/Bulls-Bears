/**
 * Types for tickers store
 */

export interface TickerData {
  timestamp: number;
  close: number;
  high: number;
  low: number;
  open: number;
}

export interface Tickers {
  [tickerName: string]: TickerData[];
}

export interface State {
  tickersData: Tickers;
  availableTickerNames: string[];
}

export const initialState: State = {
  tickersData: {},
  availableTickerNames: [],
};

/**
 * Types related to REST api responses
 */
export interface TickerDataResponse {
  Close: number;
  Dividends: number;
  High: number;
  Low: number;
  Open: number;
  'Stock Splits': number;
  Volume: number;
}
export interface GetTickerResponse {
  [timestamp: string]: TickerDataResponse;
}
