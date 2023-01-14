import { AxiosError } from "axios";
import { axiosPost } from "src/shared/rest/axios";
import urlcat from "urlcat";

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/';

export interface CreationNewFilm<T> {
  film: any;
  onSuccess: (res: T) => void;
  onFailure: (err: AxiosError) => void;
}

export const createNewFilm = <T>({film, onSuccess, onFailure}: CreationNewFilm<T>) => {
  axiosPost({
    url: urlcat(BASE_URL, '/swdb/:user/added-films.json', { user: 'yqu' }),
    body: JSON.stringify(film),
    onSuccess,
    onFailure
  });
};
