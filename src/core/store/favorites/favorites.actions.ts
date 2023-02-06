import { map } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { FavoriteMoviesObjList, FavoriteToSave, HttpResponse2List, ResultProperty, StarwarsFilm } from 'src/shared/models/starwars.model';
import urlcat from "urlcat";
import { httpGet } from "src/shared/fetcber/axios";
import { favoriteFilmslice } from './favorites.reducer';
import { BASE_FIREBASE_URL } from 'src/shared/api/endpoints';
import { HttpParams } from 'src/shared/models/http.model';
import { ajaxGet } from 'src/shared/rest/ajax';
import { transformFirebaseData } from 'src/shared/utils/firebase';

export const { getFavoritesFailure, getFavoritesStart, getFavoritesSuccess } = favoriteFilmslice.actions;

export const fetchFavoritesThunk = (params?: HttpParams) => {
  const restUrl = urlcat(BASE_FIREBASE_URL, '/swdb/:user/favorites.json', { user: 'yqu', ...params });
  
  return (dispatch: any, getState: any) => {
    dispatch(getFavoritesStart());
    ajaxGet<FavoriteMoviesObjList>({
      url: restUrl,
      onSuccess: (data) => {
        const dataList: FavoriteToSave[] = transformFirebaseData(data);
        dispatch(getFavoritesSuccess(dataList));
      },
      onFailure: (err) => {
        dispatch(getFavoritesFailure(err));
      }
    });
   
  };
};
