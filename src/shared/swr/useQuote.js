/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useSWR from 'swr';
import { axiosGet } from "../rest/axios-rest";
import { axiosFetcher } from "./fetcher";

export const QUOTE_LIST_BASE_URL = 'https://kq-1-1a499.firebaseio.com/quote-list';

const useQuoteDetail = (id) => {

  const { data, error, isValidating, mutate } = useSWR(`${QUOTE_LIST_BASE_URL}/${id}.json`, axiosFetcher, {
    revalidateOnFocus: false
  });

  const updateData = () => {
    mutate();
  };

  return {
    quoteDetail: data,
    isLoading: (data === undefined) && isValidating,
    isError: error,
    update: updateData
  };
};

export default useQuoteDetail;