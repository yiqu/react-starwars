import { createAsyncThunk } from "@reduxjs/toolkit";
import { lastValueFrom, map, switchMap } from "rxjs";
import { BASE_SW_API } from "src/shared/api/endpoints";
import { EntityHttpParams, HttpParams } from "src/shared/models/http.model";
import { PAGE_COUNT, PAGE_LIMIT } from "src/shared/utils/constants";
import urlcat from "urlcat";
import { fromFetch } from 'rxjs/fetch';
import { HttpResponse, StarwarsContent } from "src/shared/models/starwars.model";

const defaultParams = { limit: PAGE_LIMIT, page: PAGE_COUNT };

export const fetchCoreEntityData = createAsyncThunk(
  '[Core Entities / API] Fetch entity data',
  async (thunkParams: EntityHttpParams, thunkAPI) => {
    
    const restUrl: string = urlcat(BASE_SW_API, `${thunkParams.entity}`, 
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