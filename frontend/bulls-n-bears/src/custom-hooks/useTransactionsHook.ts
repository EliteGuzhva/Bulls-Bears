import { useState } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../context/useAuth';
import {
  getLastTickerData,
  getSelectedTicker,
} from '../selectors/tickers/tickers';
import { RootState } from '../store/types';
import { OperationType } from '../types/user';

export const useTransactionsHook = () => {
  const [amount, setAmount] = useState(0);
  const { sandboxTransaction, loading } = useAuth();
  const ticker = useSelector(getSelectedTicker);
  const lastTickerData = useSelector((state: RootState) =>
    getLastTickerData(state, ticker)
  );
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setAmount((prev) => newValue);
  };

  const handleBuyClick = async () => {
    if (sandboxTransaction !== undefined && lastTickerData) {
      await sandboxTransaction({
        operationType: OperationType.Buy,
        price: lastTickerData.close,
        amount,
        ticker,
      });
    }
  };

  const handleSellClick = async () => {
    if (sandboxTransaction !== undefined && lastTickerData) {
      await sandboxTransaction({
        operationType: OperationType.Sell,
        price: lastTickerData.close,
        amount,
        ticker,
      });
    }
  };

  return {
    amount,
    handleAmountChange,
    handleBuyClick,
    handleSellClick,
  };
};
