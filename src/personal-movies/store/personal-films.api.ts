import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { BASE_FIREBASE_SW_URL } from 'src/shared/api/endpoints';
import { HttpParams } from 'src/shared/models/http.model';
import { PersonalFilm, XhrFirebaseResult } from './personal-films.state';
import { QueryFilter } from '../all/PersonalFilmsTableFilter';

export const subPath = "yqu/added-films";

export const personaFilmsTag = "PersonalFilms";

export const personalFilmsApi = createApi({
  reducerPath: 'personal-films',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_FIREBASE_SW_URL
  }),
  keepUnusedDataFor: 60, // time to keep data not on screen (no subscriber)
  tagTypes: [personaFilmsTag],
  endpoints: (builder) => ({
    fetchPersonalFilms: builder.query<PersonalFilm[], QueryFilter[]>({
      query: (params: QueryFilter[]) => {
        return {
          url: `${subPath}.json`,
          params: params.length > 0 ? {filters: JSON.stringify(params)} : undefined,
          method: 'GET'
        };
      },
      transformResponse: (response: XhrFirebaseResult<PersonalFilm>, meta, args: HttpParams | void) => {
        const result: PersonalFilm[] = [];
        const fireKeys = Object.keys(response);
        fireKeys.forEach((key: string) => {
          result.push({
            ...response[key],
            fireKey: key
          });
        });
        return result;
      },
      providesTags: (result, error, args, meta) => {
        const tags: TagDescription<"PersonalFilms">[] = [{type: personaFilmsTag, id: 'ALL'}];
        result?.forEach((res: PersonalFilm) => {
          tags.push({type: personaFilmsTag, id: res.fireKey});
        });
        return tags;
      }
    }),

    fetchPersonalFilm: builder.query<PersonalFilm, string>({
      query: (fireKey: string) => {
        return {
          url: `${subPath}/${fireKey}`,
          method: 'GET'
        };
      },
      transformResponse: (response: PersonalFilm, meta, args: string) => {
        return response;
      },
      providesTags: (result, error, args, meta) => {
        if (result) {
          return [{type: personaFilmsTag, id: result.fireKey}];
        }
        return [];
      }
    }),

  })
});


export const { useFetchPersonalFilmsQuery, useFetchPersonalFilmQuery } = personalFilmsApi;