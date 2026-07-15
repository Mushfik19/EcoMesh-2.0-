import { useEffect, useState } from "react";

export interface MockQueryState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export function useMockQuery<T>(loader: () => Promise<T>): MockQueryState<T> {
  const [state, setState] = useState<MockQueryState<T>>({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    let active = true;

    setState((current) => ({ ...current, isLoading: true, error: null }));

    loader()
      .then((data) => {
        if (active) {
          setState({ data, error: null, isLoading: false });
        }
      })
      .catch((error: Error) => {
        if (active) {
          setState({ data: null, error, isLoading: false });
        }
      });

    return () => {
      active = false;
    };
  }, [loader]);

  return state;
}
