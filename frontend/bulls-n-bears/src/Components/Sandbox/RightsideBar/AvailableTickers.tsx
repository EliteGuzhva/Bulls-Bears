import React from 'react';
import {
  List,
  makeStyles,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableTickers } from '../../../selectors/tickers/tickers';
import { useEffect } from 'react';
import {
  loadAvailableTickers,
  setSelectedTicker,
} from '../../../store/tickers';
import useAuth from '../../../context/useAuth';

export interface AvailableTickersProps {}
export const AvailableTickers: React.FunctionComponent<AvailableTickersProps> = (
  props
) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tickers = useSelector(getAvailableTickers);
  const { user } = useAuth();
  useEffect(() => {
    if (tickers.length === 0 && user !== undefined) {
      dispatch(loadAvailableTickers(user.sandboxData.currentTime));
    }
  }, [tickers]);
  const handleTickerClick = (name: string) => {
    dispatch(setSelectedTicker(name));
  };
  return (
    <div>
      {tickers.length > 0 ? (
        <List>
          {tickers.map((ticker) => (
            <ListItem onClick={() => handleTickerClick(ticker)}>
              <ListItemText primary={ticker} />
            </ListItem>
          ))}
        </List>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

const useStyles = makeStyles({});
