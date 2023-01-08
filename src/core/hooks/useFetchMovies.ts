import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import { useState } from "react";
import { useDeepCompareEffect } from "react-use";
import urlcat from "urlcat";
import { httpGet } from "src/shared/fetcber/axios";
import { HttpResponse2List, StarwarsFilm } from "src/shared/models/starwars.model";
import { BASE_SW_API } from "src/shared/api/endpoints";


const useFetchMovies = ({ params={refetch: 0} }: FetchMovieHookProp) => {
  
  const [url, setUrl] = useState<string>();

  useDeepCompareEffect(() => {
    const restUrl = urlcat(BASE_SW_API, '/films', { ...params });
    setUrl(restUrl);
  }, [params]);

  const { data, isValidating, error, isLoading } = useSWR(
    () => url ? url : null, 
    (url) => httpGet<HttpResponse2List<StarwarsFilm>>(url, 1000),
    {
      revalidateOnFocus: false,
      revalidateIfStale: true,
      keepPreviousData: true
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