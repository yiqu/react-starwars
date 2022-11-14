import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import { axiosFetcher } from "../fetchers/movies";

const useFetchMovies = <T>(props: FetchMovieHookProp) => {
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