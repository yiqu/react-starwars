import { useEffect, useState } from "react";
import { HttpParams } from "../models/http.model";
import axios, { AxiosError, AxiosResponse } from 'axios';
import urlcat from "urlcat";
import { useDeepCompareEffect } from "react-use";
import { AXIOS_ERROR_CODE } from "../models/axios.model";

export interface UseFetchProps {
  url: string;
  params?: HttpParams;
}

export default function useFetch<T>({ url, params={} }: UseFetchProps) {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ payload, setPayload ] = useState<T>();
  const [ error, setError ] = useState<any>(undefined);

  useDeepCompareEffect(() => {
    const abortController = new AbortController();
    const restUrl = urlcat(url, '', { ...params });

    setIsLoading(true);
    axios.get(restUrl, {signal: abortController.signal})
      .then((response: AxiosResponse<T>) => {
        setPayload(response.data);
      })
      .catch((err) => {
        if (error && error.code !== AXIOS_ERROR_CODE.ERR_CANCELED) {
          setError(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return (() => {
      setError(undefined);
      abortController.abort();
    });

  }, [url, params]);

  return {
    payload,
    loading: isLoading,
    error
  };
};

