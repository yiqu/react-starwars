import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react';
import { BASE_FIREBASE_SW_URL } from 'src/shared/api/endpoints';
import { HttpParams } from 'src/shared/models/http.model';
import { PersonalFilm, PersonalFilmUpdate, XhrFirebaseResult } from './personal-films.state';
import { QueryFilter } from '../all/PersonalFilmsTableFilter';
import { PatchCollection } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { assign } from 'lodash';
import { IPersonalFilm } from '../new-film/NewPersonalFilmForm';
import { FirebasePostPayload } from 'src/shared/models/firebase.model';

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

    updatePersonalFilm: builder.mutation<Partial<PersonalFilm>, PersonalFilmUpdate>({
      query: (editable: PersonalFilmUpdate) => {
        return {
          url: `${subPath}/${editable.fireKey}.json`,
          method: 'PATCH',
          body: {
            ...editable.data
          }
        };
      },
      invalidatesTags: (result, error, arg: PersonalFilmUpdate, meta) => {
        return [];
      },
       //Optimistic Updates
      async onQueryStarted(patchArgs: PersonalFilmUpdate, apiActions) {
        const cacheList = personalFilmsApi.util.selectInvalidatedBy(apiActions.getState(), [{ type: personaFilmsTag }]);

        // Mutate the item in favorites cache list
        const patchResults: PatchCollection[] = [];
        cacheList.forEach((cache, index) => {
          const patchResult = apiActions.dispatch(
            personalFilmsApi.util.updateQueryData('fetchPersonalFilms', cache.originalArgs, (draft) => {
              // loop through and update the correct item
              const index = draft.findIndex((personalFilm) => personalFilm.fireKey === patchArgs.fireKey);
              draft[index].director = patchArgs.data.director!;
              draft[index].title = patchArgs.data.title!;
              draft[index].isWorking = true;
            })
          );
          patchResults.push(patchResult);
        });

        // Mutate the item in favorite detail cache
        const patchResult = apiActions.dispatch(
          personalFilmsApi.util.updateQueryData('fetchPersonalFilm', patchArgs.fireKey, (draft) => {
            draft.title = patchArgs.data.title!;
            draft.director = patchArgs.data.director!;
            draft.isWorking = true;
          })
        );

        try {
          const updatedFilm = await apiActions.queryFulfilled;
          // Update item detail cache with call response
          apiActions.dispatch(
            personalFilmsApi.util.updateQueryData('fetchPersonalFilm', patchArgs.fireKey, (draft) => {
              assign(draft, updatedFilm.data);
            })
          );
          // Update item in cache list with call response
          cacheList.forEach((cache) => {
            apiActions.dispatch(
              personalFilmsApi.util.updateQueryData('fetchPersonalFilms', cache.originalArgs, (draft) => {
                const index = draft.findIndex((film) => film.fireKey === patchArgs.fireKey);
                draft[index].isWorking = false;  
                assign(draft[index], updatedFilm.data);
              })
            );
          });
        } catch {
          patchResult.undo();
          patchResults.forEach((pr) => {
            pr.undo();
          });
          apiActions.dispatch(personalFilmsApi.util.invalidateTags([{type: personaFilmsTag}]));
        }
      },
    }),

    deletePersonalFilm: builder.mutation<Partial<PersonalFilm>, string>({
      query: (fireKey: string) => {
        return {
          url: `${subPath}/${fireKey}.json`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, arg: string, meta) => {
        return [{type: personaFilmsTag}];
      },
    }),

    createPersonalFilm: builder.mutation<FirebasePostPayload, IPersonalFilm>({
      query: (args: IPersonalFilm) => {
        return {
          url: `${subPath}.json`,
          method: 'POST',
          body: args
        };
      },
      invalidatesTags: (result: FirebasePostPayload | undefined, error, arg: IPersonalFilm, meta) => {
        return [{ type: personaFilmsTag }];
      },
    })
  })
});


export const { useFetchPersonalFilmsQuery, useFetchPersonalFilmQuery, useUpdatePersonalFilmMutation, useDeletePersonalFilmMutation,
  useCreatePersonalFilmMutation } = personalFilmsApi;