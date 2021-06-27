import { TickerData } from './types';

export enum TickersActionType {
  SetTickerData = 'SET_TICKER_DATA',
  AppendTickerData = 'APPEND_TICKER_DATA',
  SetSelectedTicker = 'SET_SELECTED_TICKER',
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

export type Action = SetTickerData | AppendTickerData;
