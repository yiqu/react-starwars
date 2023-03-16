import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { GenericStarwarsContent, HttpResponse, StarwarsContent } from 'src/shared/models/starwars.model';
import { PAGE_LIMIT, PAGE_COUNT, PAGE_LIMIT_30 } from 'src/shared/utils/constants';
import urlcat, { query } from "urlcat";

const defaultParams = { limit: PAGE_LIMIT_30 };

export const starwarsContentApi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  endpoints: (builder) => ({
    fetchVehicles: builder.query<HttpResponse<StarwarsContent>, EntityHttpParams>({
      query: (params: EntityHttpParams) => {
        return {
          url: `${params.entity}`,
          params: {
            ...params.urlParams,
            limit: PAGE_LIMIT_30,
            page: params.pagination.page ?? 1 // SWAPI is 1 based
          },
          method: 'GET'
        };
      },
      transformResponse: (response: HttpResponse<StarwarsContent>, meta, args: EntityHttpParams) => {
        return response;
      }
    })
  })
});


export const { useFetchVehiclesQuery } = starwarsContentApi;