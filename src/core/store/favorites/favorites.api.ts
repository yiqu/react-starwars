import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { assign, unset } from 'lodash';
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
      //Optimistic Updates
      async onQueryStarted(patchArgs: FavoriteToSave, apiActions) {
        const patchResult = apiActions.dispatch(
          starwarsFavoritesApi.util.updateQueryData('fetchFavorite', patchArgs.fireId!, (draft) => {
            draft.isCurrentFavorite = patchArgs.isCurrentFavorite;
            draft.filmId = "Updating";
          })
        );
        try {
          const updatedFavorite = await apiActions.queryFulfilled;
          apiActions.dispatch(
            starwarsFavoritesApi.util.updateQueryData('fetchFavorite', patchArgs.fireId!, (draft) => {
              assign(draft, updatedFavorite.data);
            })
          );
        } catch {
          patchResult.undo();
          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['fetchFavorites']))
           */
          apiActions.dispatch(starwarsFavoritesApi.util.invalidateTags(['Favorites']));
        }
      },
    })

  })
});


export const { useFetchFavoriteQuery, useFetchFavoritesQuery, useUpdateFavoriteMutation } = starwarsFavoritesApi;