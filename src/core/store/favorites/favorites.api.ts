import { PatchCollection } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { current } from 'immer';
import { assign, findLast, unset } from 'lodash';
import { BASE_FIREBASE_SW_URL, BASE_SW_API } from 'src/shared/api/endpoints';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { FavoriteMoviesObjList, FavoriteToSave } from 'src/shared/models/starwars.model';

export const favoritesPath = "favorites";

export const undefinedTag = "UNDEFINED";
export const favoritesTag = "Favorites";


export const starwarsFavoritesApi = createApi({
  reducerPath: 'favorites',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_FIREBASE_SW_URL
  }),
  tagTypes: [undefinedTag, favoritesTag],
  endpoints: (builder) => ({

    fetchFavorites: builder.query<FavoriteToSave[], HttpParams | void>({
      query: (params: HttpParams | void) => {
        return {
          url: `yqu/${favoritesPath}.json`,
          params: params ? {
            ...params
          } : undefined,
          method: 'GET'
        };
      },
      transformResponse: (response: FavoriteMoviesObjList, meta, args: HttpParams | void) => {
        const keys = Object.keys(response);
        const result: FavoriteToSave[] = [];
        keys.forEach((key: string) => {
          result.push({
            ...response[key],
            fireId: key
          });
        });
        result.sort((x, y) => {
          return x.episodeId > y.episodeId ? 1 : -1;
        });
        return result;
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"Favorites">[] = [];
        result?.forEach((fav) => {
          tags.push({
            type: favoritesTag, id: fav.fireId
          });
        });
        tags.push({type: favoritesTag, id: 'ALL'});
        return tags;
      }
    }),

    fetchFavorite: builder.query<FavoriteToSave, string>({
      query: (fireId: string) => {
        return {
          url: `yqu/${favoritesPath}/${fireId}.json`,
          method: 'GET'
        };
      },
      transformResponse: (response: FavoriteToSave, meta, args: string) => {
        return response;
      },
      providesTags: (result, error, args, meta) => {
        return [{type: favoritesTag, id: args}];
      }
    }),

    updateFavorite: builder.mutation<FavoriteToSave, FavoriteToSave>({
      query: (editable: FavoriteToSave) => {
        return {
          url: `yqu/${favoritesPath}/${editable.fireId}.json`,
          method: 'PUT',
          body: {
            ...editable
          }
        };
      },
      invalidatesTags: (result, error, arg: FavoriteToSave, meta) => {
        // Using optimstic update, no need to invalidate any tags
        return [];
      },
      //Optimistic Updates
      async onQueryStarted(patchArgs: FavoriteToSave, apiActions) {
        const cacheList = starwarsFavoritesApi.util.selectInvalidatedBy(apiActions.getState(), [{ type: favoritesTag }]);

        // Mutate the item in favorites cache list
        const fetchFavoritesCache = cacheList.filter((cache) => cache.endpointName === 'fetchFavorites');
        const patchResults: PatchCollection[] = [];
        fetchFavoritesCache.forEach((cache) => {
          const patchResult = apiActions.dispatch(
            starwarsFavoritesApi.util.updateQueryData('fetchFavorites', cache.originalArgs, (draft) => {
              // loop through the favorites (from fetchFavorites) and update the correct item
              const index = draft.findIndex((fav) => fav.fireId === patchArgs.fireId);
              draft[index].isCurrentFavorite = patchArgs.isCurrentFavorite;
              draft[index].apiWorking = true;
            })
          );
          patchResults.push(patchResult);
        });

         // Mutate the item in favorite detail cache
        const patchResult = apiActions.dispatch(
          starwarsFavoritesApi.util.updateQueryData('fetchFavorite', patchArgs.fireId!, (draft) => {
            draft.isCurrentFavorite = patchArgs.isCurrentFavorite;
            draft.filmId = "Updating";
          })
        );

        try {
          // wait for call to complete
          const updatedFavorite = await apiActions.queryFulfilled;

          // Update item detail cache with call response
          apiActions.dispatch(
            starwarsFavoritesApi.util.updateQueryData('fetchFavorite', patchArgs.fireId!, (draft) => {
              assign(draft, updatedFavorite.data);
            })
          );

          // Update item in cache list with call response
          fetchFavoritesCache.forEach((cache) => {
            apiActions.dispatch(
              starwarsFavoritesApi.util.updateQueryData('fetchFavorites', cache.originalArgs, (draft) => {
                const index = draft.findIndex((fav) => fav.fireId === patchArgs.fireId);
                draft[index].apiWorking = false;  
                assign(draft[index], updatedFavorite.data);
              })
            );
          });
        } catch {
          patchResult.undo();
          patchResults.forEach((pr) => {
            pr.undo();
          });
          apiActions.dispatch(starwarsFavoritesApi.util.invalidateTags([{type: favoritesTag}]));
        }
      },
    })

  })
});


export const { useFetchFavoriteQuery, useFetchFavoritesQuery, useUpdateFavoriteMutation } = starwarsFavoritesApi;