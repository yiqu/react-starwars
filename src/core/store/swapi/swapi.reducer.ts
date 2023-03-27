import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ContentPagination, SwapiState } from './swapi.state';
import { planetsSubPath, speciesSubPath, starshipsSubPath, starwarsContentApi, vehiclesSubPath } from './swapi';

const initialState: SwapiState = {
  pagination: {}
};

const swapiSlice = createSlice({
  name: 'swapiConfig',
  initialState,
  reducers: {
    dispatchPaging: (state, action: PayloadAction<ContentPagination>) => {
      state.pagination[action.payload.entityId] = {
        ...state.pagination[action.payload.entityId],
        pagination: {
          ...state.pagination[action.payload.entityId].pagination,
          page: action.payload.pagination.page
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
  }
});

export const { dispatchPaging } = swapiSlice.actions;
export default swapiSlice.reducer;