import { GetTickerResponse, TickerData } from '../types';

export const mapGetTickerResponseToTickerDataArray = (
  response: GetTickerResponse
): TickerData[] =>
  Object.entries(response).map(([timestamp, { Close, High, Low, Open }]) => ({
    date: new Date(Number(timestamp) * 1000),
    close: Close,
    high: High,
    low: Low,
    open: Open,
  }));
