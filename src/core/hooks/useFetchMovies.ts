import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import { useState } from "react";
import { useDeepCompareEffect } from "react-use";
import urlcat from "urlcat";
import { httpGet } from "src/shared/fetcber/axios";
import { HttpResponse2List, StarwarsFilm } from "src/shared/models/starwars.model";

export const SW_BASE_API = 'https://swapi.tech/api/';

const useFetchMovies = ({ params={refetch: 0} }: FetchMovieHookProp) => {
  
  const [url, setUrl] = useState<string>();

  useDeepCompareEffect(() => {
    const restUrl = urlcat(SW_BASE_API, '/films', { ...params });
    setUrl(restUrl);
  }, [params]);

  const { data, isValidating, error, isLoading } = useSWR(
    () => url ? url : null, 
    (url) => httpGet<HttpResponse2List<StarwarsFilm>>(url, 1000),
    {
      revalidateOnFocus: false,
      revalidateIfStale: true,
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