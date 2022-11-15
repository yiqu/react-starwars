import { axiosFetcher } from '../fetchers/favorites';
import useSWR from "swr";
import { FetchFavoritesHookProp } from 'src/shared/models/core-props.model';
import { FavoriteToSave } from 'src/shared/models/starwars.model';


const useFetchFavorites = (props: FetchFavoritesHookProp) => {

  const { data, isValidating, error, mutate } = useSWR([props.userId, props.params], axiosFetcher<{[key: string]: FavoriteToSave}>, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const transformedData: {[key: string]: FavoriteToSave} = {};

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