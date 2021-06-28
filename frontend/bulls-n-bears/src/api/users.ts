import { ServerUser } from '../types/serverUser';
import { OperationType, User } from '../types/user';
import { addDays, mapDateToTimestamp } from '../utils/date';
import { mapServerUserToUser } from './helpers/users';

const API_URL = process.env.REACT_APP_SERVER_URL;
export const getUser = async (token: string): Promise<User> => {
  const response = await fetch(`${API_URL}/db/get_user`, {
    method: 'GET',
    headers: {
      'x-access-tokens': token,
    },
  });
  const responseJson: ServerUser | { message: string } = await response.json();
  if ('message' in responseJson) {
    throw new Error(responseJson.message);
  }
  const user = mapServerUserToUser(responseJson);
  console.log(`New user current time: ${user.sandboxData.currentTime}`);
  return user;
};

export const performTransaction = async (params: {
  token: string;
  operationType: OperationType;
  amount: number;
  price: number;
  ticker: string;
}): Promise<User> => {
  const { token, operationType, amount, price, ticker } = params;
  const formData = new FormData();
  formData.append('ticker', ticker);
  formData.append('operation_type', operationType);
  formData.append('price', String(price));
  formData.append('amount', String(amount));
  const response = await fetch(`${API_URL}/db/sandbox_transaction`, {
    method: 'POST',
    headers: {
      'x-access-tokens': token,
    },
    body: formData,
  });
  const responseJson: ServerUser = await response.json();
  const user = mapServerUserToUser(responseJson);
  console.log(`New user current time: ${user.sandboxData.currentTime}`);
  return user;
};

export const sandboxStep = async (params: {
  token: string;
  currentTime: Date;
}) => {
  const { token, currentTime } = params;
  const newTime = String(mapDateToTimestamp(addDays(currentTime, 1)));
  console.log(`Sandbox step: ${newTime}`);
  const formData = new FormData();
  formData.append('virtual_current', newTime);
  const response = await fetch(`${API_URL}/db/sandbox_step`, {
    method: 'POST',
    headers: {
      'x-access-tokens': token,
    },
    body: formData,
  });
  const responseJson: ServerUser = await response.json();
  const user = mapServerUserToUser(responseJson);
  console.log(`New user current time: ${user.sandboxData.currentTime}`);
  return user;
};

export const sandboxInit = async (params: {
  token: string;
  currentTime: Date;
  balance: number;
}) => {
  const { token, currentTime, balance } = params;
  const newTime = String(mapDateToTimestamp(addDays(currentTime, 0)));
  const formData = new FormData();
  formData.append('virtual_start', newTime);
  formData.append('balance', String(balance));
  const response = await fetch(`${API_URL}/db/sandbox_init`, {
    method: 'POST',
    headers: {
      'x-access-tokens': token,
    },
    body: formData,
  });
  const responseJson: ServerUser | { message: string } = await response.json();
  if ('message' in responseJson) {
    throw new Error(responseJson.message);
  }
  const user = mapServerUserToUser(responseJson);
  console.log(`New user current time: ${user.sandboxData.currentTime}`);
  return user;
};
