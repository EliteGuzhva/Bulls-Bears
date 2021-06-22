enum OperationType {
  Buy = 'BUY',
  Sell = 'SELL',
}
export interface ServerTransaction {
  amount: number;
  commission: number;
  operation_type: OperationType;
  timestamp: number;
  price: number;
}
export interface ServerAsset {
  amount: number;
  ticker: string;
  transactions: ServerTransaction[];
}
export interface ServerSandboxData {
  assets: ServerAsset[];
  balance: number;
  virtual_current: number;
  virtual_start: number;
}

export interface ServerUser {
  username: string;
  sandbox_data: ServerSandboxData;
  email: string;
}
