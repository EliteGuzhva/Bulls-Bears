import { TransactionWithTicker, User } from '../types/user';

export const getUserTransactions = (user: User): TransactionWithTicker[] => {
  return user.sandboxData.assets
    .reduce<TransactionWithTicker[]>(
      (acc, curr) => [...acc, ...curr.transactions],
      []
    )
    .sort((a, b) => a.timestamp - b.timestamp);
};
