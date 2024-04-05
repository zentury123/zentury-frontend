import { useCallback, useRef } from 'react';

/**
 *
 * @param {Function} callback The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @return {Function} A debounced version of the provided function.
 */
function useDebounce(callback, delay) {
  const argsRef = useRef();
  const timeout = useRef();

  return useCallback((...args) => {
    argsRef.current = args;
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current);
      }
    }, delay);
  }, [callback, delay]);
}

export default useDebounce;