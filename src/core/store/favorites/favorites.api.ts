import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
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

        return result;
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"Favorites">[] = [];
        result?.forEach((res: FavoriteToSave) => {
          tags.push({type: favoritesTag, id: res.fireId});
        });
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

    

  })
});


export const { useFetchFavoriteQuery, useFetchFavoritesQuery } = starwarsFavoritesApi;