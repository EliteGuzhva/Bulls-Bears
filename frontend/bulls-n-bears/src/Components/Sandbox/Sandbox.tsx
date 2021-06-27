import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTickerHistory, getTickerHistory } from '../../store/tickers';
import { RootState } from '../../store/types';
import { getTickerData } from '../../selectors/tickers/tickers';
import { TickerChart } from './TickerChart';
import { ChartRouter } from './ChartRouter';
import { Transactions } from './Transactions';

export interface SandboxProps {}
const tickerName = 'AAPL';
export const Sandbox: React.FunctionComponent<SandboxProps> = (props) => {
  return (
    <div>
      <ChartRouter />
      <Transactions />
    </div>
  );
};

const useStyles = makeStyles({});
