import { useHistory } from 'react-router-dom';

export const useHistorySetter = (url: string) => {
  let history = useHistory();
  const setHistory = () => {
    history.push(`${url}`);
  };
  return setHistory;
};
