import { TickerData } from './types';

export enum TickersActionType {
  SetTickerData = 'SET_TICKER_DATA',
}

export interface SetTickerData {
  type: TickersActionType.SetTickerData;
  tickerName: string;
  tickerData: TickerData[];
}

export type Action = SetTickerData;
