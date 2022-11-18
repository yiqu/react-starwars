import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import { FavoriteMoviesObjList } from "src/shared/models/starwars.model";
import useSWR from "swr";
import { axiosFetcher } from "../fetchers/movies";

const useFetchMovies = <T>(props: FetchMovieHookProp, favMovies: FavoriteMoviesObjList) => {
  const { data, isValidating, error, mutate } = useSWR([props.url, props.params], axiosFetcher<T>, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    loading: isValidating || (!error && !data),
    error,
    mutate
  };
};

export default useFetchMovies;