/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import useSWR from 'swr';
import { axiosGet } from "../rest/axios-rest";
import { appendKeyFireData, axiosFetcher } from "./fetcher";

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/quote-list';

const useQuoteComments = (id) => {

  const { data, error, isValidating, mutate } = useSWR(`${BASE_URL}/${id}/comments.json`, axiosFetcher, {
    revalidateOnFocus: false
  });

  return {
    comments: appendKeyFireData(data),
    isLoading: (data === undefined) && isValidating,
    isError: error,
    update: mutate
  };
};

export default useQuoteComments;