import { useCallback } from "react";
import { useServiceHook } from "../store/useStore";

export default function useHttp() {
  const error = useServiceHook((state) => state.error);
  const loading = useServiceHook((state) => state.loading);
  const updateError = useServiceHook((state) => state.updateError);
  const updateLoading = useServiceHook((state) => state.updateLoading);

  const request = async (url: string) => {
    try {
      updateLoading(true);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();

      updateLoading(false);
      return data;
    } catch (e) {
      if (e instanceof Error) {
        updateLoading(false);
        updateError(e.message);
      } else {
        console.error("An unknown error occurred:", e);
      }
    }
  };
  const clearError = useCallback(() => {
    updateError("");
  }, [updateError]);
  return { error, loading, request, clearError };
}
