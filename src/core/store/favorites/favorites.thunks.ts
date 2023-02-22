import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, map, switchMap } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import { HttpParams } from "src/shared/models/http.model";
import { FavoriteMoviesObjList, FavoriteToSave } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';
import { ToggleFavoriteArg } from "./favorites.state";
import { FirebasePostPayload } from "src/shared/models/firebase.model";

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
 * Behavior: Merge
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
  }
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
      const isLoading = (thunkAPI.getState() as RootState).favoriteFilms.loading;
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
    thunkAPI.dispatch(fetchFavoritesSwitchThunk({user: 'yqu'}));
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
      const isLoading = (thunkAPI.getState() as RootState).favoriteFilms.loading;
      return !isLoading;
    },
  }
);