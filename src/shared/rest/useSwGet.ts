/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { axiosStarwarsFetcher } from 'src/shared/rest/starwars-api';
import { GetHookProps, HttpParams } from '../models/http.model';
import { useEffect, useState } from 'react';
import { usePreviousDistinct, useDeepCompareEffect } from 'react-use';
import { HttpResponse } from '../models/starwars.model';

const useSwGet = <T>(url: string, params: HttpParams) => {

  const [ httpParams, setParams ] = useState<HttpParams | undefined>(params);

  useDeepCompareEffect(() => {
    setParams((prev) => {
      return {
        ...prev,
        ...params
      };
    });
  }, [params]);

  const { data, error } = useSWRImmutable([url, httpParams], axiosStarwarsFetcher<HttpResponse<T>>);

  return {
    data: data?.results,
    loading: !error && (data === undefined),
    isError: error
  };

};

export default useSwGet;