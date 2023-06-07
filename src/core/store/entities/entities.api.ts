import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { BASE_SW_API } from 'src/shared/api/endpoints';
import { HttpResponse, StarwarsContent } from 'src/shared/models/starwars.model';
import { EntityFetchArg } from './entities.state';
import { current } from 'immer';

export const speciesTag = "Species";
export const starshipsTag = "Starships";
export const vehiclesTag = "Vehicles";
export const planetsTag = "Planets";
export const peopleTag = "People";
export const charactersTag = "Characters";

export const starwarsEntitiesApi = createApi({
  reducerPath: 'swEntities',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SW_API
  }),
  tagTypes: [speciesTag, starshipsTag, vehiclesTag, planetsTag, peopleTag, charactersTag],
  endpoints: (builder) => ({

    fetchEntitiesInfinite: builder.query<HttpResponse<StarwarsContent>, EntityFetchArg>({
      query: (args: EntityFetchArg) => {
        return {
          url: `${args.url}`,
          method: 'GET'
        };
      },
      transformResponse: (response: HttpResponse<StarwarsContent>, meta, args: EntityFetchArg) => {
        return response;
      },
      serializeQueryArgs: ({ endpointName, endpointDefinition, queryArgs }) => {
        return queryArgs.entityId;  // each infinite scroll cache correspond to their own unique id
      },
      merge: (currentCache: HttpResponse<StarwarsContent>, newItems: HttpResponse<StarwarsContent>) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.url !== previousArg?.url; // if provided url has changed
      },
      providesTags: (result, error, args: EntityFetchArg, meta) => {
        const tags: TagDescription<"Species" | "Starships" | "Vehicles" | "Planets" | "People" | "Characters">[] = [];
        result?.results.forEach((res: StarwarsContent) => {
          tags.push({ type: args.entityId, id: res.uid });
        });
        tags.push(peopleTag);
        return tags;
      }
    }),

  })
});

export const { useFetchEntitiesInfiniteQuery, useLazyFetchEntitiesInfiniteQuery } = starwarsEntitiesApi;