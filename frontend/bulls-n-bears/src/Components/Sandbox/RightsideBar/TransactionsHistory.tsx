import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { TransactionsProps } from '../Transactions';
import useAuth from '../../../context/useAuth';
import { useState } from 'react';
import { OperationType, TransactionWithTicker } from '../../../types/user';
import { useEffect } from 'react';
import { getUserTransactions } from '../../../context/get-user-transactions';

export interface TransactionsHistoryProps {}
export const TransactionsHistory: React.FunctionComponent<TransactionsProps> = (
  props
) => {
  const classes = useStyles();
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<TransactionWithTicker[]>([]);
  useEffect(() => {
    if (user !== undefined) {
      setTransactions(getUserTransactions(user));
    }
  }, [user]);

  return (
    <div>
      {transactions.length > 0 && (
        <List>
          {transactions.map(
            ({ amount, price, operationType: type, ticker }) => (
              <ListItem>
                <ListItemIcon>
                  {type === OperationType.Buy ? <Add /> : <Remove />}
                </ListItemIcon>
                <ListItemText
                  primary={`${amount} ${ticker}`}
                  secondary={price}
                />
              </ListItem>
            )
          )}
        </List>
      )}
    </div>
  );
};

const useStyles = makeStyles({
  item: {},
});
