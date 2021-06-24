import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTickerHistory } from '../../store/tickers';

export interface SandboxProps {}
export const Sandbox: React.FunctionComponent<SandboxProps> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTickerHistory('AAPL'));
  });
  return <div>sandbox</div>;
};

const useStyles = makeStyles({});
