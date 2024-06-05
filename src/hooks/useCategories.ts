import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<string[]>("/products/categories", { signal: controller.signal })
      .then((res) => setCategories(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { categories, error };
}

export default useCategories;
