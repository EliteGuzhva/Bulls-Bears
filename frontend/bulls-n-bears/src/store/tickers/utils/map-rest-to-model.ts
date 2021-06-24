import { GetTickerResponse, TickerData } from '../types';

export const mapGetTickerResponseToTickerDataArray = (
  response: GetTickerResponse
): TickerData[] =>
  Object.entries(response).map(([timestamp, { Close, High, Low, Open }]) => ({
    timestamp: Number(timestamp),
    close: Close,
    high: High,
    low: Low,
    open: Open,
  }));
