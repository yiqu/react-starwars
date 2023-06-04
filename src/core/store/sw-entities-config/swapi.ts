import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { GenericStarwarsContent, HttpResponse, HttpSearchResponse, HttpSearchResponses, 
  ResultProperty, StarwarsContent, StarwarsPlanet, StarwarsSpecie, StarwarsStarships, StarwarsVehicles } from 'src/shared/models/starwars.model';
import { PAGE_LIMIT, PAGE_COUNT, PAGE_LIMIT_30 } from 'src/shared/utils/constants';
import urlcat, { query } from "urlcat";
import { SearchContentQuery, StarwarsSpecieEditable } from './swapi.state';

export const speciesSubPath = "species";
export const starshipsSubPath = "starships";
export const vehiclesSubPath = "vehicles";
export const planetsSubPath = "planets";
export const peopleSubPath = "people";

export const speciesTag = "Species";
export const starshipsTag = "Starships";
export const vehiclesTag = "Vehicles";
export const planetsTag = "Planets";
export const peopleTag = "People";

export const searchTag = 'SearchResults';

export const starwarsContentApi = createApi({
  reducerPath: 'sw-entities',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  tagTypes: [speciesTag, starshipsTag, vehiclesTag, planetsTag, peopleTag, searchTag],
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
        tags.push({type: speciesTag, id: 'PARTIAL-LIST'});
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

    fetchStarships: builder.query<HttpResponse<StarwarsContent>, EntityHttpParams>({
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
        const tags: TagDescription<"Starships">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({type: starshipsTag, id: res.uid});
        });
        tags.push({type: starshipsTag, id: 'PARTIAL-LIST'});
        return tags;
      }
    }),

    fetchStarship: builder.query<HttpSearchResponse<StarwarsStarships>, string>({
      query: (id: string) => {
        return {
          url: `${starshipsSubPath}/${id}`,
          method: 'GET'
        };
      },
      providesTags: (result, error, args, meta) => {
        return [{type: starshipsTag, id: args}];
      }
    }),

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
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"Vehicles">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({type: vehiclesTag, id: res.uid});
        });
        tags.push({type: vehiclesTag, id: 'PARTIAL-LIST'});
        return tags;
      }
    }),

    fetchVehicle: builder.query<HttpSearchResponse<StarwarsVehicles>, string>({
      query: (id: string) => {
        return {
          url: `${vehiclesSubPath}/${id}`,
          method: 'GET'
        };
      },
      providesTags: (result, error, args, meta) => {
        return [{type: vehiclesTag, id: args}];
      }
    }),

    fetchPlanets: builder.query<HttpResponse<StarwarsContent>, EntityHttpParams>({
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
        const tags: TagDescription<"Planets">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({type: planetsTag, id: res.uid});
        });
        tags.push({type: planetsTag, id: `PARTIAL-LIST`});
        return tags;
      }
    }),

    fetchPlanet: builder.query<HttpSearchResponse<StarwarsPlanet>, string>({
      query: (id: string) => {
        return {
          url: `${planetsSubPath}/${id}`,
          method: 'GET'
        };
      },
      providesTags: (result, error, args, meta) => {
        return [{type: planetsTag, id: args}];
      }
    }),

    fetchCharacters: builder.query<HttpResponse<StarwarsContent>, EntityHttpParams>({
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
        const tags: TagDescription<"People">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({type: peopleTag, id: res.uid});
        });
        tags.push({type: peopleTag, id: 'PARTIAL-LIST'});
        return tags;
      }
    }),

    fetchCharactersInfinite: builder.query<HttpResponse<StarwarsContent>, string>({
      query: (fetchUrl: string) => {
        return {
          url: `${fetchUrl}`,
          method: 'GET'
        };
      },
      transformResponse: (response: HttpResponse<StarwarsContent>, meta, args: string) => {
        return response;
      },
       serializeQueryArgs: ({ endpointName,endpointDefinition,queryArgs }) => {
        return endpointName;
      },
       merge: (currentCache: HttpResponse<StarwarsContent>, newItems: HttpResponse<StarwarsContent>) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"People">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({type: peopleTag, id: res.uid});
        });
        tags.push(peopleTag);
        return tags;
      }
    }),



    // General Search
    searchContent: builder.query<ResultProperty<any>[], SearchContentQuery>({
      query: (args: SearchContentQuery) => {
        return {
          url: `${args.entity}`,
          params: {
            [args.entity === 'films' ? 'title' : 'name']: args.name ?? `${''}`
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


export const { useFetchSpeciesQuery, useFetchSpecieQuery, useSearchContentQuery, 
  useEditSpecieMutation, useFetchStarshipQuery, useFetchStarshipsQuery, useFetchVehiclesQuery, useFetchVehicleQuery,
  useFetchPlanetsQuery, useFetchPlanetQuery, useFetchCharactersQuery, useFetchCharactersInfiniteQuery } = starwarsContentApi;