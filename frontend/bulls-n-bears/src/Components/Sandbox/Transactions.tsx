import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useTransactionsHook } from '../../custom-hooks/useTransactionsHook';
import { SandboxStep } from './SandboxStep';

export interface TransactionsProps {}
export const Transactions: React.FunctionComponent<TransactionsProps> = (
  props
) => {
  const {
    amount,
    handleAmountChange,
    handleBuyClick,
    handleSellClick,
  } = useTransactionsHook();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField value={amount} type="number" onChange={handleAmountChange} />
      <Button onClick={handleBuyClick}>Buy</Button>
      <Button onClick={handleSellClick}>Sell</Button>
      <SandboxStep />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
});
