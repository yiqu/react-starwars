import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import { useRef, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import urlcat from "urlcat";
import { httpGetCancellable } from "src/shared/fetcber/axios";
import { HttpResponse2List, StarwarsFilm } from "src/shared/models/starwars.model";
import { BASE_SW_API } from "src/shared/api/endpoints";


const useFetchMovies = ({ params={refetch: 0} }: FetchMovieHookProp) => {
  
  const [url, setUrl] = useState<string>();
  const abortControllerRef = useRef<AbortController>(new AbortController());

  useDeepCompareEffect(() => {
    const restUrl = urlcat(BASE_SW_API, '/films', { ...params });
    abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();
    setUrl(restUrl);
  }, [params]);

  const { data, isValidating, error, isLoading } = useSWR(
    () => url ? url : null, 
    (url) => httpGetCancellable<HttpResponse2List<StarwarsFilm>>(url, abortControllerRef.current),
    {
      revalidateOnFocus: false,
      revalidateIfStale: true,
      keepPreviousData: true,
      shouldRetryOnError: true
    }
  );
  
  return {
    allFilms: data?.result,
    allFilmsLoading: isLoading,
    allFilmsValidating: isValidating,
    allFilmsError: error,
  };
};

export default useFetchMovies;