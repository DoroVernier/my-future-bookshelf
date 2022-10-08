import { useCallback, useEffect, useState } from 'react';

/**
 * A hook to use localStorage with SSR.
 *
 * Make sure that localStorage and state do not conflict with each other.
 * Only update the state if no initialState was read from localStorage.
 *
 * @param {string} key
 * @param {unknown} initialState
 * @returns {[unknown, (value: unknown) => void]}
 */
export default function useLocalStorage(key, initialState) {
  const [stateValue, setStateValue] = useState(initialState);

  const setStateAndUpdateLocalStorage = useCallback(
    (value) => {
      setStateValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(key);

    if (stored !== null) {
      setStateValue(JSON.parse(stored));
    }
  }, [key]);

  return [stateValue, setStateAndUpdateLocalStorage];
}
