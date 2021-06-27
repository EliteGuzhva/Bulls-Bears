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
import { loadAvailableTickers } from '../../../store/tickers';

export interface AvailableTickersProps {}
export const AvailableTickers: React.FunctionComponent<AvailableTickersProps> = (
  props
) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tickers = useSelector(getAvailableTickers);
  useEffect(() => {
    if (tickers.length === 0) {
      dispatch(loadAvailableTickers());
    }
  });
  return (
    <div>
      {tickers.length > 0 ? (
        <List>
          {tickers.map((ticker) => (
            <ListItem>
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
