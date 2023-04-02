// useDebouncedCallback.ts
import { useRef, useCallback, useEffect } from "react";

type CallbackFn = (...args: any[]) => void;

function useDebouncedCallback(callback: CallbackFn, delay: number): CallbackFn {
  const callbackRef = useRef<CallbackFn>(callback);
  const timeoutRef = useRef<number | null>(null);
  console.log("1");

  // Ensure the callback is up-to-date.
  useEffect(() => {
    callbackRef.current = callback;
    console.log("2");
  }, [callback]);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      console.log("3");
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  // Clean up the timeout when the component unmounts.
  useEffect(() => {
    return () => {
      console.log("4");
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

export default useDebouncedCallback;
