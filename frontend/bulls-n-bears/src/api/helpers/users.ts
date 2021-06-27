import {
  ServerUser,
  ServerTransaction,
  ServerAsset,
  ServerSandboxData,
} from '../../types/serverUser';
import { Asset, SandboxData, Transaction, User } from '../../types/user';
import { mapTimestampToDate } from '../../utils/date';

const mapServerTransactionToTransaction = (
  serverTransaction: ServerTransaction
): Transaction => {
  const { operation_type, ...rest } = serverTransaction;
  return {
    operationType: operation_type,
    ...rest,
  };
};

const mapServerAssetToAsset = (serverAsset: ServerAsset): Asset => {
  const { transactions, ...rest } = serverAsset;
  return {
    ...rest,
    transactions: transactions.map(mapServerTransactionToTransaction),
  };
};

const mapServerSandboxDataToSandboxData = (
  serverSandboxData: ServerSandboxData
): SandboxData => {
  const { assets, balance, virtual_current, virtual_start } = serverSandboxData;
  return {
    assets: assets.map(mapServerAssetToAsset),
    balance,
    currentTime: mapTimestampToDate(virtual_current),
    startTime: mapTimestampToDate(virtual_start),
  };
};

export const mapServerUserToUser = (serverUser: ServerUser): User => {
  const { sandbox_data, ...rest } = serverUser;
  return {
    ...rest,
    sandboxData: mapServerSandboxDataToSandboxData(sandbox_data),
  };
};
