import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { ContentPagination, SwapiState } from './swapi.state';
import { peopleSubPath, planetsSubPath, speciesSubPath, starshipsSubPath, starwarsContentApi, vehiclesSubPath } from './swapi';

const initialState: SwapiState = {
  pagination: {}
};

export const swEntitiesConfigSlice = createSlice({
  name: 'sw-entities-config',
  initialState,
  reducers: {
    dispatchPaging: (state, action: PayloadAction<ContentPagination>) => {
      state.pagination[action.payload.entityId] = {
        ...state.pagination[action.payload.entityId],
        pagination: {
          ...state.pagination[action.payload.entityId].pagination,
          page: action.payload.pagination.page,
          fetchUrl: action.payload.pagination.fetchUrl
        }
      };
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsContentApi.endpoints.fetchSpecies.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        [speciesSubPath]: {
          entityId: speciesSubPath,
          pagination: {
            ...state.pagination[speciesSubPath]?.pagination,
            total_pages: payload.total_pages,
            total_records: payload.total_records,
            next: payload.next,
            previous: payload.previous
          }
        }
      };
      
    });

    builder.addMatcher(starwarsContentApi.endpoints.fetchStarships.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        [starshipsSubPath]: {
          entityId: starshipsSubPath,
          pagination: {
            ...state.pagination[starshipsSubPath]?.pagination,
            total_pages: payload.total_pages,
            total_records: payload.total_records,
            next: payload.next,
            previous: payload.previous
          }
        }
      };
      
    });

    builder.addMatcher(starwarsContentApi.endpoints.fetchVehicles.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        [vehiclesSubPath]: {
          entityId: vehiclesSubPath,
          pagination: {
            ...state.pagination[vehiclesSubPath]?.pagination,
            total_pages: payload.total_pages,
            total_records: payload.total_records,
            next: payload.next,
            previous: payload.previous
          }
        }
      };
      
    });

    builder.addMatcher(starwarsContentApi.endpoints.fetchPlanets.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        [planetsSubPath]: {
          entityId: planetsSubPath,
          pagination: {
            ...state.pagination[planetsSubPath]?.pagination,
            total_pages: payload.total_pages,
            total_records: payload.total_records,
            next: payload.next,
            previous: payload.previous
          }
        }
      };
      
    });

    builder.addMatcher(starwarsContentApi.endpoints.fetchCharacters.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        [peopleSubPath]: {
          entityId: peopleSubPath,
          pagination: {
            ...state.pagination[peopleSubPath]?.pagination,
            total_pages: payload.total_pages,
            total_records: payload.total_records,
            next: payload.next,
            previous: payload.previous
          }
        }
      };
      
    });

    builder.addMatcher(starwarsContentApi.endpoints.fetchCharactersInfinite.matchFulfilled, (state, action) => {
      const payload = action.payload;
      state.pagination = {
        ...state.pagination,
        [peopleSubPath]: {
          entityId: peopleSubPath,
          pagination: {
            ...state.pagination[peopleSubPath]?.pagination,
            total_pages: payload.total_pages,
            total_records: payload.total_records,
            next: payload.next,
            previous: payload.previous
          }
        }
      };
      
    });
  }
});

export const { dispatchPaging } = swEntitiesConfigSlice.actions;
export default swEntitiesConfigSlice.reducer;