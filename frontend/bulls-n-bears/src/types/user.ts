export enum OperationType {
  Buy = 'BUY',
  Sell = 'SELL',
}
export interface Transaction {
  amount: number;
  commission: number;
  operationType: OperationType;
  timestamp: number;
  price: number;
}
export interface Asset {
  amount: number;
  ticker: string;
  transactions: TransactionWithTicker[];
}
export interface SandboxData {
  assets: Asset[];
  balance: number;
  currentTime: Date;
  startTime: Date;
}

export interface User {
  username: string;
  sandboxData: SandboxData;
  email: string;
}

export interface TransactionWithTicker {
  amount: number;
  commission: number;
  operationType: OperationType;
  timestamp: number;
  price: number;
  ticker: string;
}
