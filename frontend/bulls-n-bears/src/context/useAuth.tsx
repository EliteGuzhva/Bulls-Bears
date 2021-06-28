import { useState } from 'react';
import { useContext } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { createContext, ReactNode } from 'react';
import * as sessions from '../api/sessions';
import * as users from '../api/users';
import { OperationType, User } from '../types/user';

interface TransactionParams {
  operationType: OperationType;
  amount: number;
  price: number;
  ticker: string;
}

interface AuthContextType {
  token?: string;
  user?: User;
  loading: boolean;
  login(username: string, password: string): Promise<void>;
  register(username: string, password: string, email: string): Promise<void>;
  logout(): Promise<void>;
  sandboxTransaction(params: TransactionParams): Promise<void>;
  sandboxStep(): Promise<void>;
  sandboxInit(balance: number, date: Date): Promise<void>;
}
// eslint-disable
const AuthContext = createContext<Partial<AuthContextType>>({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const lsTocken = localStorage.getItem('bnb_auth');
    if (lsTocken !== null) {
      users
        .getUser(lsTocken)
        .then((user) => setUser(user))
        .catch((_error) => {
          localStorage.removeItem('bnb_auth');
        })
        .finally(() => {
          setToken(lsTocken);
          setLoadingInitial(false);
        });
    }
    setLoadingInitial(false);
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    const sessionToken = await sessions.login(username, password);
    setToken(sessionToken);
    localStorage.setItem('bnb_auth', sessionToken);
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
    localStorage.removeItem('bnb_auth');
    setUser(undefined);
  };

  const sandboxTransaction = async (params: TransactionParams) => {
    setLoading(true);
    const userAfterTransaction = await users.performTransaction({
      ...params,
      token: String(token),
    });
    setUser(userAfterTransaction);
    setLoading(false);
  };

  const sandboxStep = async () => {
    if (user && token) {
      setLoading(true);
      const userAfterStep = await users.sandboxStep({
        token,
        currentTime: user.sandboxData.currentTime,
      });
      setUser(userAfterStep);
      setLoading(false);
    }
  };

  const sandboxInit = async (balance: number, date: Date) => {
    if (user !== undefined && token) {
      setLoading(true);
      const userAfterInit = await users.sandboxInit({
        token,
        currentTime: date,
        balance,
      });
      setUser(userAfterInit);
      setLoading(false);
    }
  };
  const memoedValue = useMemo(
    () => ({
      token,
      login,
      loading,
      register,
      user,
      logout,
      sandboxTransaction,
      sandboxStep,
      sandboxInit,
    }),
    [token, loading, user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export default useAuth;
