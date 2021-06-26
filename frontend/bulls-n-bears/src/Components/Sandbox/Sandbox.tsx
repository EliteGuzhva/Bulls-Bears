import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTickerHistory, getTickerHistory } from '../../store/tickers';
import { RootState } from '../../store/types';
import { getTickerData } from '../../selectors/tickers/tickers';
import { TickerChart } from './TickerChart';

export interface SandboxProps {}
const tickerName = 'AAPL';
export const Sandbox: React.FunctionComponent<SandboxProps> = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) =>
    getTickerData(state, tickerName)
  );
  useEffect(() => {
    if (data === undefined) {
      dispatch(getAllTickerHistory(tickerName));
    }
  }, data);
  return <div>{data !== undefined && <TickerChart data={data} />}</div>;
};
