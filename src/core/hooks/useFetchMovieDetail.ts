import { useEffect, useRef, useState } from "react";
import { FetchMovieDetailHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import urlcat from "urlcat";
import { BASE_SW_API } from "src/shared/api/endpoints";
import { httpGetCancellable } from "src/shared/fetcber/axios";
import { HttpResponse2, StarwarsFilm } from "src/shared/models/starwars.model";


const useFetchMovieDetail = <T>({ movieId }: FetchMovieDetailHookProp) => {

  const [url, setUrl] = useState<string>();
  const abortControllerRef = useRef<AbortController>(new AbortController());

  useEffect(() => {
    const restUrl = urlcat(BASE_SW_API, '/films/:movieId', { movieId });
    setUrl(restUrl);
    const abortControl = abortControllerRef.current;
    return (() => {
      abortControl.abort();
    });
  }, [movieId]);
  
  const { data, isValidating, isLoading, error } = useSWR(
    () => url ? url : null, 
    (url) => httpGetCancellable<HttpResponse2<StarwarsFilm>>(url, abortControllerRef.current),
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isValidating,
    loading: isLoading,
    error
  };
};

export default useFetchMovieDetail;