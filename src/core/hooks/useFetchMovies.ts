import { FetchMovieHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import { axiosFetcher } from "../fetchers/movies";

const useFetchMovies = <T>(props: FetchMovieHookProp) => {
  const { data, isValidating, error, mutate } = useSWR(
    () => {
      // if (props.params?.fetchTime) {
      //   return [props.url, props.params];
      // }
      // return null;
      return [props.url, props.params];
    },  axiosFetcher<T>, {
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