import React, { useEffect } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedTicker,
  getTickerData,
} from '../../selectors/tickers/tickers';
import { RootState } from '../../store/types';
import useAuth from '../../context/useAuth';
import { addTickerHistory, getTickerHistory } from '../../store/tickers';
import { TickerChart } from './TickerChart';
import { addDays, addMonths, ceilHours, floorHours } from '../../utils/date';

export interface ChartRouterProps {}
export const ChartRouter: React.FunctionComponent<ChartRouterProps> = (
  props
) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tickerName = useSelector(getSelectedTicker);
  const data = useSelector((state: RootState) =>
    getTickerData(state, tickerName)
  );
  const { user } = useAuth();
  const current = user?.sandboxData.currentTime;
  // set initial chart data
  useEffect(() => {
    if (data === undefined && current !== undefined) {
      const monthBefore = addMonths(current, -3);
      dispatch(getTickerHistory(tickerName, monthBefore, current));
    }
  }, [data, tickerName, dispatch, current]);
  // add ticker data by current update
  useEffect(() => {
    if (data !== undefined && current !== undefined) {
      const begin = floorHours(current);
      const end = ceilHours(current);
      dispatch(addTickerHistory(tickerName, begin, end));
    }
  }, [current]);
  return (
    <div className={classes.container}>
      {data !== undefined ? (
        <TickerChart data={data} tickerName={tickerName} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    height: '600px',
  },
});
