import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useTransactionsHook } from '../../custom-hooks/useTransactionsHook';
import { SandboxStep } from './SandboxStep';

const BuyButton = withStyles({
  root: {
    background: 'green',
    color: 'white',
  },
})(Button);

const SellButton = withStyles({
  root: {
    background: 'red',
    color: 'white',
  },
})(Button);

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
      <BuyButton variant="contained" size="large" onClick={handleBuyClick}>
        Buy
      </BuyButton>
      <SellButton variant="contained" size="large" onClick={handleSellClick}>
        Sell
      </SellButton>
      <SandboxStep />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    gap: '10px',
  },
});
