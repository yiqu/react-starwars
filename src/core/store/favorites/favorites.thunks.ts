import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, map, switchMap } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import { HttpParams, HttpParamsWithSearch } from "src/shared/models/http.model";
import { FavoriteMoviesObjList, FavoriteToSave } from "src/shared/models/starwars.model";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';
import { ToggleFavoriteArg } from "./favorites.state";
import { FirebasePostPayload } from "src/shared/models/firebase.model";

/** ASYNC THUNKS */

/**
 * Thunk - Fetch favorite films with params
 * Behavior: Merge
 */
export const fetchFavoritesThunk = createAsyncThunk(
  '[FAVORITE FILMS / API / Switch] Get all favorites with params',
  async (thunkParams: HttpParamsWithSearch | undefined, thunkAPI) => {

    let restUrl = urlcat(BASE_FIREBASE_URL, '/swdb/:user/favorites.json', { ...thunkParams?.httpParams });
    
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

    const favs = await lastValueFrom(obs$);
    return favs;
  },
);

/**
 * Thunk - Toggle favorite status
 * Behavior: exhaust
 */
export const toggleFavoriteExhaustThunk = createAsyncThunk(
  '[FAVORITE FILMS / API / Exhaust] Toggle favorite',
  async (thunkParams: ToggleFavoriteArg, thunkAPI) => {
    const fav = {
      ...thunkParams.fav,
      lastUpdated: new Date().getTime(),
      isCurrentFavorite: thunkParams.favStatus,
    };
    const obs$ = ajax.put<FavoriteToSave>(thunkParams.url, fav).pipe(
      map((res: AjaxResponse<FavoriteToSave>) => {
        return res.response;
      })
    );
    return lastValueFrom(obs$);
  },
  {
    condition: (args: HttpParams, thunkAPI) => {
      const isLoading = true; // check if it is loading
      return !isLoading;
    },
  }
);

/**
 * Thunk - Toggle favorite status
 * Chain - GET favorites
 * Behavior: Merge
 */
export const toggleFavoriteThunk = createAsyncThunk(
  '[FAVORITE FILMS / API / Merge] Toggle favorite',
  async (thunkParams: ToggleFavoriteArg, thunkAPI) => {
    const fav = {
      ...thunkParams.fav,
      lastUpdated: new Date().getTime(),
      isCurrentFavorite: thunkParams.favStatus,
    };
    const obs$ = ajax.put<FavoriteToSave>(thunkParams.url, fav).pipe(
      map((res: AjaxResponse<FavoriteToSave>) => {
        return res.response;
      })
    );

    const toggleFavoriteResult = await lastValueFrom(obs$);
    thunkAPI.dispatch(fetchFavoritesThunk({httpParams: {user: 'yqu'}}));
    return toggleFavoriteResult;
  },
  {
    condition: (args: HttpParams, thunkAPI) => {
      return true;
    },
  }
);

/**
 * Thunk - Add a new favorite film
 * Behavior: exhaust
 */
export const addNewFavoriteExhaustThunk = createAsyncThunk(
  '[FAVORITE FILMS / API / Exhaust] Add new favorite',
  async (thunkParams: ToggleFavoriteArg, thunkAPI) => {
    const fav = {
      ...thunkParams.fav,
      lastUpdated: new Date().getTime(),
      isCurrentFavorite: thunkParams.favStatus,
    };
    const obs$ = ajax.post<FirebasePostPayload>(thunkParams.url, fav).pipe(
      map((res: AjaxResponse<FirebasePostPayload>) => {
        return res.response;
      })
    );
    return lastValueFrom(obs$);
  },
  {
    condition: (args: HttpParams, thunkAPI) => {
      const isLoading = true; // check if it is loading
      return !isLoading;
    },
  }
);


export const removeFalseyValueFromObject = (obj?: HttpParams): HttpParams | undefined  => {
  if (obj) {
    const copy = {...obj};
    const keysOfParams = Object.keys(copy);
    keysOfParams.forEach((key) => {
      if (!copy[key]) {
        delete copy[key];
      }
    });
    return copy;
  }
  return obj;
};