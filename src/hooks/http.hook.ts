import { useCallback, useState } from "react";

export default function useHttp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (url: string, options?: RequestInit) => {
    try {
      setLoading(true);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data, "data");
      setLoading(false);
      return data;
    } catch (e) {
      if (e instanceof Error) {
        setLoading(false);
        setError(e.message);
      } else {
        console.error("An unknown error occurred:", e);
      }
    }
  };
  const clearError = useCallback(() => {
    setError("");
  }, []);
  return { error, loading, request, clearError };
}
