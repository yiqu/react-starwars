import { useState } from 'react';
import { HttpParams } from 'src/shared/models/http.model';
import useSWR from 'swr';
import { useDeepCompareEffect } from "react-use";
import urlcat from 'urlcat';
import { httpGet } from "src/shared/fetcber/axios";
import { convertFirebaseDataToList } from 'src/shared/firebase/utils';
import { FirebaseData } from 'src/shared/models/firebase.model';
import { StarwarFilmPersonal } from 'src/shared/models/starwars.model';

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/';

const useFetchPersonalFilms = ({ user, params }: {user: string, params?: HttpParams}) => {

  const [url, setUrl] = useState<string>();

  useDeepCompareEffect(() => {
    const restUrl = urlcat(BASE_URL, '/swdb/:user/added-films.json', { user: 'yqu', ...params });
    setUrl(restUrl);
  }, [user, params]);

  const { data, isValidating, error, isLoading } = useSWR(
    () => url ? url : null, 
    (url) => httpGet<FirebaseData<StarwarFilmPersonal>>(url, 2000),
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  return {
    personalFilms: data ? convertFirebaseDataToList(data) : data,
    personalFilmsLoading: isLoading,
    personalFilmsValidating: isValidating,
    personalFilmsError: error
  };

};
export default useFetchPersonalFilms;

