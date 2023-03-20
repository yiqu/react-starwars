import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { RtkTag } from 'src/shared/models/redux.model';
import { GenericStarwarsContent, HttpResponse, HttpSearchResponse, HttpSearchResponses, ResultProperty, StarwarsContent, StarwarsSpecie } from 'src/shared/models/starwars.model';
import { PAGE_LIMIT, PAGE_COUNT, PAGE_LIMIT_30 } from 'src/shared/utils/constants';
import urlcat, { query } from "urlcat";
import { SearchContentQuery, StarwarsSpecieEditable } from './swapi.state';

export const speciesSubPath = "species";

export const speciesTag = "Species";
export const searchTag = 'SearchResults';

export const starwarsContentApi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  tagTypes: [speciesTag, searchTag],
  endpoints: (builder) => ({
    fetchSpecies: builder.query<HttpResponse<StarwarsContent>, EntityHttpParams>({
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
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"Species">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({type: speciesTag, id: res.uid});
        });
        tags.push(speciesTag);
        return tags;
      }
    }),

    fetchSpecie: builder.query<HttpSearchResponse<StarwarsSpecie>, string>({
      query: (id: string) => {
        return {
          url: `${speciesSubPath}/${id}`,
          method: 'GET'
        };
      },
      providesTags: (result, error, args, meta) => {
        return [{type: speciesTag, id: args}];
      }
    }),

    editSpecie: builder.mutation<HttpSearchResponse<StarwarsSpecie>, StarwarsSpecieEditable<StarwarsSpecie>>({
      query: (editable: StarwarsSpecieEditable<StarwarsSpecie>) => {
        return {
          url: `${speciesSubPath}/${editable.entityId}`,
          method: 'PUT',
          body: {
            ...editable.editable
          }
        };
      },
      invalidatesTags: (result, error, args, meta) => {
        return [{type: speciesTag, id: args.entityId}];
      },
    }),


    // General Search
    searchContent: builder.query<ResultProperty<any>[], SearchContentQuery>({
      query: (args: SearchContentQuery) => {
        const u = urlcat(BASE_SW_API,args.entity, {name: args.name ?? `${' '}`});
        return {
          url: `${args.entity}`,
          params: {
            name: args.name ?? `${''}`
          },
          method: 'GET'
        };
      },
      providesTags: () => {
        return [searchTag];
      },
      transformResponse: (response: HttpSearchResponses<any>) => {
        return response.result;
      }
    })
  })
});


export const { useFetchSpeciesQuery, useFetchSpecieQuery, useSearchContentQuery, useEditSpecieMutation } = starwarsContentApi;