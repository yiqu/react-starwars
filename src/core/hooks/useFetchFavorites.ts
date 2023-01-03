/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from "swr/immutable";
import { FetchFavoritesHookProp } from 'src/shared/models/core-props.model';
import { FavoriteMoviesObjList, FavoriteToSave } from 'src/shared/models/starwars.model';
import { axiosGet } from "src/shared/firebase/fire-axios";
import React, { useEffect, useState } from "react";
import { useDeepCompareEffect } from "react-use";
import urlcat from "urlcat";
import { httpGet } from "src/shared/fetcber/axios";
import { FirebaseData } from "src/shared/models/firebase.model";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";

const useFetchFavorites = ({ userId, params={} }: FetchFavoritesHookProp) => {

  const [url, setUrl] = useState<string>();
  const [transformed, setTransformed] = useState<FavoriteMoviesObjList>({});

  useDeepCompareEffect(() => {
    const restUrl = urlcat(BASE_FIREBASE_URL, '/swdb/:user/favorites.json', { user: 'yqu', ...params });
    setUrl(restUrl);
  }, [userId, params]);

  const { data, isValidating, error, isLoading } = useSWR(
    () => url ? url : null, 
    (url) => httpGet<FirebaseData<FavoriteToSave>>(url),
  );


  useEffect(() => {
    const transformedData: FavoriteMoviesObjList = {};
    if (data) {
      const keys = Object.keys(data ?? {});
      keys.forEach((key) => {
        transformedData[data[key].episodeId] = {
          fireId: key,
          ...data[key],
        };
      });
      setTransformed(transformedData);
    }
  }, [data]);

  return {
    data: transformed,
    loading: isLoading,
    error,
  };
};

export default useFetchFavorites;