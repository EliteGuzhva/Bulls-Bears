import { useState } from 'react';
import useAuth from '../context/useAuth';

export const useSandboxInit = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [amount, setAmount] = useState(0);
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    setAmount(val);
  };
  const { sandboxInit, loading } = useAuth();
  const handleInitClick = async () => {
    if (
      sandboxInit !== undefined &&
      amount !== undefined &&
      selectedDate !== null
    ) {
      await sandboxInit(amount, selectedDate);
    }
  };
  return {
    amount,
    selectedDate,
    handleAmountChange,
    handleDateChange,
    handleInitClick,
    loading,
  };
};
