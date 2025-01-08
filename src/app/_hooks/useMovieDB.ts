"use client"

import { useEffect, useState } from "react";
import { api } from "../_components/api/apiConfig";

interface IOption {
  endpoint: string;
  params?: {
    page?: number;
    with_genres?: string;
  };
}

export function useMovieDB<TypeData>(
  option: IOption,
  initialState: TypeData
): [TypeData, boolean, boolean] {
  const [data, setData] = useState<TypeData>(initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false)


  const loadData = async () => {
    try {
      if (!loading) setLoading(true);
      const result = await api.get(option.endpoint, {
        params: option.params,
      });
      setLoading(false);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      setLoading(false);
      setError(true)
    }
  };

  useEffect(() => {
    loadData();
  }, [option.endpoint, option?.params?.with_genres, option?.params?.page]);

  return [data, loading, error];
}
