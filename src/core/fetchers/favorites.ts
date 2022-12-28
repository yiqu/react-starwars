import { AxiosResponse } from 'axios';
import { axiosGet, axiosPost, axiosPut } from 'src/shared/firebase/fire-axios';
import { HttpParams } from 'src/shared/models/http.model';
import { FavoriteToSave } from 'src/shared/models/starwars.model';
import { sleep } from "../../shared/utils/sleep";

const baseUrl: string = 'swdb/';

export const saveFavorite = (userId: string, film: FavoriteToSave): Promise<AxiosResponse<FavoriteToSave, any>> => {
  const favUrl = `${baseUrl}${userId}/favorites`;
  return axiosPost<FavoriteToSave>(favUrl, film);
};

export const updateFavorite = (userId: string, favorite: FavoriteToSave): Promise<AxiosResponse<FavoriteToSave, any>> => {
  const favUrl = `${baseUrl}${userId}/favorites/${favorite.fireId}`;
  return axiosPut(favUrl, favorite);
};