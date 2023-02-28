import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, map, switchMap } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { BASE_FIREBASE_URL } from "src/shared/api/endpoints";
import { HttpParams, HttpParamsWithSearch } from "src/shared/models/http.model";
import { FavoriteMoviesObjList, FavoriteToSave } from "src/shared/models/starwars.model";
import { RootState } from "src/store/appStore";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';
import { FirebasePostPayload } from "src/shared/models/firebase.model";
import { UrlThunkParam } from "./characters.state";


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