import { createSelector } from 'reselect';
import { RootState } from '../../store/types';
export const getTickerData = createSelector(
  (state: RootState) => state.tickers.tickersData,
  (_: RootState, tickerName: string) => tickerName,
  (tickersData, tickerName) =>
    tickerName in tickersData ? tickersData[tickerName] : undefined
);

export const getSelectedTicker = (state: RootState) =>
  state.tickers.selectedTicker;

export const getLastTickerData = (state: RootState, tickerName: string) => {
  const data = getTickerData(state, tickerName);
  if (data) {
    return [...data].pop();
  }
};
