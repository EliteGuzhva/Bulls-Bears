import redaxios from 'redaxios';
const API_URL = process.env.REACT_APP_SERVER_URL;
export const login = async (username: string, password: string) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  const loginUrl = 'auth/login';
  const response = await fetch(`${API_URL}/${loginUrl}`, {
    method: 'POST',
    body: formData,
  });

  const responseJson = await response.json();
  if (responseJson.token === undefined) {
    throw new Error('Failed to get token');
  }
  return responseJson.token;
};

export const register = async (
  username: string,
  password: string,
  email: string
) => {
  const registerUrl = 'auth/register';
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('email', email);
  const response = await fetch(`${API_URL}/${registerUrl}`, {
    method: 'POST',
    body: formData,
  });

  return response.ok;
};

export const logOut = async () => {
  const logOutUrl = 'auth/logout';
  await fetch(`${API_URL}/${logOutUrl}`, {
    method: 'GET',
  });
};
