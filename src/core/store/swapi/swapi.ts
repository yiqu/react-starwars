import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { GenericStarwarsContent, HttpResponse, ResultProperty, StarwarsContent, StarwarsSpecie } from 'src/shared/models/starwars.model';
import { PAGE_LIMIT, PAGE_COUNT, PAGE_LIMIT_30 } from 'src/shared/utils/constants';
import urlcat, { query } from "urlcat";

export const starwarsContentApi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  tagTypes: ['Vehicles'],
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
        let res = response;
        if (args.urlParams) {
          res.results = response.result?.map((res) => {
            const content: StarwarsContent = {
              name: (res as any).properties.name,
              uid: (res as any).uid,
              url: (res as any).properties.url,
            };
            return content;
          }) as any;
          res.total_pages = -1;
        }
        return res;
      },
      providesTags: (result, error, args, meta) => {
        return ['Vehicles'];
      }
    })
  })
});


export const { useFetchVehiclesQuery } = starwarsContentApi;