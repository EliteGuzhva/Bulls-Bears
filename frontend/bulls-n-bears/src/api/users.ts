import { ServerUser } from '../types/serverUser';
import { User } from '../types/user';
import { mapServerUserToUser } from './helpers/users';

const API_URL = process.env.REACT_APP_SERVER_URL;
export const getUser = async (token: string): Promise<User> => {
  const response = await fetch(`${API_URL}/db/get_user`, {
    method: 'GET',
    headers: {
      'x-access-tokens': token,
    },
  });
  const responseJson: ServerUser = await response.json();
  const user = mapServerUserToUser(responseJson);
  return user;
};
