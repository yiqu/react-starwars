import { useState } from "react";
import { useDeepCompareEffect } from "react-use";
import { HttpEntityProp } from "src/shared/models/http.model";
import urlcat from 'urlcat';
import useSWRImmutable from 'swr/immutable';
import { httpGet } from "src/shared/fetcber/axios";
import { HttpResponse } from "src/shared/models/starwars.model";
import { AxiosError } from "axios";

export const SW_BASE_API = 'https://swapi.tech/api/';
export const DEFAULT_MAX_PAGE_PARAMS = {limit: 10000, page: 1};


const useFetchSwEntity = <T>({ entityType, params={}, sleep=0 }: HttpEntityProp) => {

  const [url, setUrl] = useState<string>();

  useDeepCompareEffect(() => {
    const restUrl = urlcat(SW_BASE_API, entityType, params);
    setUrl(restUrl);
  }, [params, entityType]);

  const { data, isValidating, error, isLoading } = useSWRImmutable<HttpResponse<T>>(
    () => url ? url : null, 
    (url) => httpGet<HttpResponse<T>>(url, sleep),
    {
      shouldRetryOnError: false
    }
  );

  return {
    data: data?.results,
    validating: isValidating,
    loading: isLoading,
    error: error as AxiosError
  };
};

export default useFetchSwEntity;