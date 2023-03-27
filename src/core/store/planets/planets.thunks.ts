import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, switchMap } from "rxjs";
import { BASE_SW_API } from "src/shared/api/endpoints";
import { HttpParams } from "src/shared/models/http.model";
import { HttpResponse, StarwarsContent } from "src/shared/models/starwars.model";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";

const defaultParams = { limit: PAGE_LIMIT, page: PAGE_COUNT };

export const fetchPlanets = createAsyncThunk(
  '[Planets / API] Fetch',
  async (thunkParams: HttpParams | undefined, thunkAPI) => {

    const restUrl: string = urlcat(BASE_SW_API, `planets`, 
      { ...defaultParams, ...thunkParams }
    );
    
    const obs$ = fromFetch(restUrl, {
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