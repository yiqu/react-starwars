/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { GenericStarwarsContent, HttpResponse, StarwarsContent } from 'src/shared/models/starwars.model';
import { PAGE_LIMIT, PAGE_COUNT } from 'src/shared/utils/constants';
import urlcat, { query } from "urlcat";

const defaultParams = { limit: PAGE_LIMIT, page: PAGE_COUNT };

export const starwarsContentApi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  endpoints: (builder) => ({
    fetchEntityById: builder.query<GenericStarwarsContent, EntityHttpParams>({
      query: (params: EntityHttpParams) => {
        const restUrl: string = urlcat(BASE_SW_API, `:entity`, 
          { ...defaultParams, ...params }
        );
        return {
          url: restUrl,
        };
      },
      transformResponse: (response: HttpResponse<StarwarsContent>, meta, args: EntityHttpParams) => {
        return {
          [args.entity!]: response.results
        };
      }
    })
  })
});


export const { useFetchEntityByIdQuery } = starwarsContentApi;