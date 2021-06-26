import { createSelector } from 'reselect';
import { RootState } from '../../store/types';
export const getTickerData = createSelector(
  (state: RootState) => state.tickers.tickersData,
  (_: RootState, tickerName: string) => tickerName,
  (tickersData, tickerName) => tickersData[tickerName]
);
