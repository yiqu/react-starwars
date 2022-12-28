import useSWR from "swr";
import { FetchFavoritesHookProp } from 'src/shared/models/core-props.model';
import { FavoriteMoviesObjList } from 'src/shared/models/starwars.model';
import { axiosGet } from "src/shared/firebase/fire-axios";


const useFetchFavorites = (props: FetchFavoritesHookProp) => {

  const { data, isValidating, error, mutate } = useSWR(
    () => {
      if (props.params.fetchTime) {
        return [props.userId, props.params];
      }
      return null;
    }, 
    axiosGet<FavoriteMoviesObjList>, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const transformedData: FavoriteMoviesObjList = {};

  if (data) {
    const keys = Object.keys(data ?? {});
    keys.forEach((key) => {
      transformedData[data[key].episodeId] = {
        fireId: key,
        ...data[key],
      };
    });
  }

  return {
    data: transformedData,
    loading: isValidating || (!error && !data),
    error,
    mutate
  };
};

export default useFetchFavorites;