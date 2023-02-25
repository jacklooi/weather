import { useCallback, useState } from 'react';

const useHistory = () => {
  const key = 'weather-history';
  const initialState = [];
  const historyString = localStorage.getItem(key);
  const [value, setValue] = useState(historyString ? JSON.parse(historyString) : initialState);

  const updatedHistory = useCallback(
    (newValue) => {
      if (newValue === initialState || typeof newValue === 'undefined') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
      setValue(newValue ?? initialState);
    },
    [initialState, key],
  );

  return [value, updatedHistory];
};

export default useHistory;
