import { FetchMovieDetailHookProp } from "src/shared/models/core-props.model";
import useSWR from "swr";
import { axiosFetcher } from '../fetchers/movies';

const useFetchMovieDetail = <T>({ movieId }: FetchMovieDetailHookProp) => {

  const { data, isValidating, error } = useSWR(`films/${movieId}`, axiosFetcher<T>, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    loading: isValidating || (!error && !data),
    error
  };
};

export default useFetchMovieDetail;