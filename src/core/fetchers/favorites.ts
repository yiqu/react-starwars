import { AxiosResponse } from 'axios';
import { HttpParams } from 'src/shared/models/http.model';
import { FavoriteToSave } from 'src/shared/models/starwars.model';
import { axiosGet, axiosPost, axiosPut } from 'src/shared/rest/axios-rest';
import { sleep } from "../../shared/utils/sleep";

const baseUrl: string = 'swdb/';

export const axiosFetcher = async <T>(userId: string, params?: HttpParams, slow = 0) => {
  if (slow) {
    await sleep(slow);
  }

  const userUrl = `${baseUrl}${userId}/favorites`;

  return await axiosGet<T>(userUrl, params)
    .then((res: AxiosResponse<T, any>) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
      } 
    });
};

export const saveFavorite = (userId: string, film: FavoriteToSave): Promise<AxiosResponse<FavoriteToSave, any>> => {
  const favUrl = `${baseUrl}${userId}/favorites`;
  return axiosPost<FavoriteToSave>(favUrl, film);
};

export const updateFavorite = (userId: string, favorite: FavoriteToSave): Promise<AxiosResponse<FavoriteToSave, any>> => {
  const favUrl = `${baseUrl}${userId}/favorites/${favorite.fireId}`;
  return axiosPut(favUrl, favorite);
};