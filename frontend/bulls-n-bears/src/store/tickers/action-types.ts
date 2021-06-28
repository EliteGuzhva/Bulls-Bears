import { TickerData } from './types';

export enum TickersActionType {
  SetTickerData = 'SET_TICKER_DATA',
  AppendTickerData = 'APPEND_TICKER_DATA',
  SetSelectedTicker = 'SET_SELECTED_TICKER',
  SetAvailableTickers = 'SET_AVAILABLE_TICKERS',
}

interface WithTickerName {
  tickerName: string;
}
export interface SetTickerData extends WithTickerName {
  type: TickersActionType.SetTickerData;
  tickersData: TickerData[];
}

export interface AppendTickerData extends WithTickerName {
  type: TickersActionType.AppendTickerData;
  tickerData: TickerData;
}

export interface SetAvailableTickers {
  type: TickersActionType.SetAvailableTickers;
  tickerNames: string[];
}

export interface SetSelectedTicker {
  type: TickersActionType.SetSelectedTicker;
  tickerName: string;
}

export type Action =
  | SetTickerData
  | AppendTickerData
  | SetAvailableTickers
  | SetSelectedTicker;
