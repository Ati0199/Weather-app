import { useCallback, useState } from "react";
import { useServiceHook } from "../store/useStore";

export default function useHttp() {
  const error = useServiceHook((state) => state.error);
  const loading = useServiceHook((state) => state.loading);
  const uptadeError = useServiceHook((state) => state.uptadeError);
  const uptadeLoading = useServiceHook((state) => state.uptadeLoading);

  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const request = async (url: string, options?: RequestInit) => {
    try {
      uptadeLoading(true);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data, "data");
      uptadeLoading(false);
      return data;
    } catch (e) {
      if (e instanceof Error) {
        uptadeLoading(false);
        uptadeError(e.message);
      } else {
        console.error("An unknown error occurred:", e);
      }
    }
  };
  const clearError = useCallback(() => {
    uptadeError("");
  }, []);
  return { error, loading, request, clearError };
}
