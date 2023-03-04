import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, map, switchMap } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import { HttpParams, HttpParamsWithSearch } from "src/shared/models/http.model";
import { FavoriteMoviesObjList, FavoriteToSave, HttpResponse, StarwarsContent } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';
import { FirebasePostPayload } from "src/shared/models/firebase.model";
import { UrlThunkParam } from "./characters.state";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";

const defaultParams = { limit: PAGE_LIMIT, page: PAGE_COUNT };

export const fetchHomeWorld = createAsyncThunk(
  '[CHARACTERS / API] Fetch Home World',
  async (thunkParams: UrlThunkParam, thunkAPI) => {
    
    const obs$ = ajax.get<any>(thunkParams.url).pipe(
      map((res: AjaxResponse<any>) => {
        return res.response;
      })
    );

    return lastValueFrom(obs$);
  },
  {
    condition: (args: HttpParams, thunkAPI) => {
      return true;
    },
  }
);

export const fetchCharacters = createAsyncThunk(
  '[CHARACTERS / API] Get all characters',
  async (thunkParams: UrlThunkParam, thunkAPI) => {
    
    const obs$ = fromFetch(thunkParams.url, {
      signal: thunkAPI.signal,
    }).pipe(
      switchMap((res) => {
        if (res.ok) {
          return res.json() as Promise<HttpResponse<StarwarsContent>>;
        }
        throw new Error('API Error: ' + res.status);
      })
    );

    return lastValueFrom(obs$);
  },
  {
    condition: (args: HttpParams, thunkAPI) => {
      return true;
    },
  }
);