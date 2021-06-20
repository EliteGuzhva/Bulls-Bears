import { useState } from 'react';
import { useContext } from 'react';
import { useMemo } from 'react';
import { createContext, ReactNode } from 'react';
import * as sessions from '../api/sessions';
import * as users from '../api/users';
import { User } from '../types/user';

interface AuthContextType {
  token?: string;
  user?: User;
  loading: boolean;
  login(username: string, password: string): Promise<void>;
  register(username: string, password: string, email: string): Promise<void>;
  logout(): Promise<void>;
}
// eslint-disable
const AuthContext = createContext<Partial<AuthContextType>>({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const login = async (username: string, password: string) => {
    setLoading(true);
    const sessionToken = await sessions.login(username, password);
    setToken(sessionToken);
    const userByToken = await users.getUser(sessionToken);
    setUser(userByToken);
    setLoading(false);
  };
  const register = async (
    username: string,
    password: string,
    email: string
  ) => {
    setLoading(true);
    const ok = await sessions.register(username, password, email);
    setLoading(false);
  };

  const logout = async () => {
    sessions.logOut();
    setUser(undefined);
  };
  const memoedValue = useMemo(
    () => ({
      token,
      login,
      loading,
      register,
      user,
      logout,
    }),
    [token, loading, user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export default useAuth;
