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
  transactions: Transaction[];
}
export interface SandboxData {
  assets: Asset[];
  balance: number;
  currentTime: number;
  startTime: number;
}

export interface User {
  username: string;
  sandboxData: SandboxData;
  email: string;
}
