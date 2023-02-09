import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import { HttpParams } from "src/shared/models/http.model";
import { FavoriteMoviesObjList } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';

/** ASYNC THUNKS */


/**
 * Thunk - Fetch favorite films
 * Behavior: exhaust
 */
export const fetchFavoritesThunk = createAsyncThunk(
  '[FAVORITE FILMS / API / Exhaust] Get all favorites',
  async (thunkParams: HttpParams, thunkAPI) => {
    const restUrl = urlcat(BASE_FIREBASE_URL, '/swdb/:user/favorites.json', { ...thunkParams });
    const req = ajax.getJSON<FavoriteMoviesObjList>(`${restUrl}`);
    return lastValueFrom(req);
  },
  {
    condition: (args: HttpParams, thunkAPI) => {
      const isLoading = (thunkAPI.getState() as RootState).favoriteFilms.loading;
      return !isLoading;
    },
  }
);

/**
 * Thunk - Fetch favorite films
 * Behavior: switch
 */
export const fetchFavoritesSwitchThunk = createAsyncThunk(
  '[FAVORITE FILMS / API / Switch] Get all favorites',
  async (thunkParams: HttpParams | undefined, thunkAPI) => {
    const restUrl = urlcat(BASE_FIREBASE_URL, '/swdb/:user/favorites.json', { ...thunkParams });
    const obs$ = fromFetch(restUrl, {
      signal: thunkAPI.signal,
    }).pipe(
      switchMap((res: Response) => {
        if (res.ok) {
          return res.json() as Promise<FavoriteMoviesObjList>;
        }
        throw new Error('API Error: ' + res.status);
      })
    );
    return lastValueFrom(obs$);
  },
);