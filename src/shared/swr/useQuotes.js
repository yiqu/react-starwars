/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useSWR from 'swr';
import { axiosGet } from "../rest/axios-rest";
import { axiosFetcher } from "./fetcher";

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/quote-list.json';

const useQuotes = () => {
  const { data, error, isValidating, mutate } = useSWR(BASE_URL, axiosFetcher, {
    revalidateOnFocus: false
  });

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    console.log("new data detected");
    setCurrentData(transformData(data));
  }, [data]);

  const updateData = () => {
    mutate();
  };

  const sortHandler = useCallback((sortDir) => {
  }, []);

  const transformData = (fireData) => {
    let res = [];
    const keys = Object.keys(fireData ?? []);
    keys.forEach((key) => {
      res.push({
        key: key,
        ...fireData[key]
      });
    });
    return res;
  };

  return {
    data: currentData,
    loading: (data === undefined) && isValidating,
    error,
    updateData
  };
};

export default useQuotes;


