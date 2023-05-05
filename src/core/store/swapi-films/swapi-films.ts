import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { GenericStarwarsContent, HttpResponse, HttpResponse2List, HttpSearchResponse, HttpSearchResponses, 
  ResultProperty, StarwarsContent, StarwarsFilm, StarwarsPlanet, StarwarsSpecie, StarwarsStarships, StarwarsVehicles } from 'src/shared/models/starwars.model';
import { PAGE_LIMIT, PAGE_COUNT, PAGE_LIMIT_30 } from 'src/shared/utils/constants';
import urlcat, { query } from "urlcat";

export const filmsPath = "films";

export const filmsTag = "Films";


export const starwarsFilmsApi = createApi({
  reducerPath: 'swapi-films',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  tagTypes: [filmsTag],
  endpoints: (builder) => ({
    fetchFilms: builder.query<ResultProperty<StarwarsFilm>[], HttpParams | void>({
      query: (params: HttpParams | void) => {
        return {
          url: `${filmsPath}`,
          params: params ? {
            ...params
          } : undefined,
          method: 'GET'
        };
      },
      transformResponse: (response: HttpResponse2List<StarwarsFilm>, meta, args: HttpParams | void) => {
        return response.result;
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"Films">[] = [];
        result?.forEach((res: ResultProperty<StarwarsFilm>) => {
          tags.push({type: filmsTag, id: res.uid});
        });
        tags.push(filmsTag);
        return tags;
      }
    }),

  })
});


export const { useFetchFilmsQuery } = starwarsFilmsApi;