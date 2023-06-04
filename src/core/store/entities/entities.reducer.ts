import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { ContentPagination, SwEntitiesState } from './entities.state';
import { starwarsEntitiesApi } from './entities.api';
import { HttpResponse, StarwarsContent } from 'src/shared/models/starwars.model';

const initialState: SwEntitiesState = {
  pagination: {}
};

export const swEntitiesConfigSlice = createSlice({
  name: 'swEntitiesConfig',
  initialState,
  reducers: {
    dispatchPaging: (state, action: PayloadAction<ContentPagination>) => {
      state.pagination[action.payload.entityId] = {
        ...state.pagination[action.payload.entityId],
        pagination: {
          ...state.pagination[action.payload.entityId].pagination,
          fetchUrl: action.payload.pagination.fetchUrl
        }
      };
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(starwarsEntitiesApi.endpoints.fetchEntitiesInfinite.matchFulfilled, (state, action) => {
      const payload: HttpResponse<StarwarsContent> = action.payload;
      const entityId = action.meta.arg.originalArgs.entityId;
      state.pagination = {
        ...state.pagination,
        [entityId]: {
          entityId: entityId,
          pagination: {
            ...state.pagination[entityId]?.pagination,
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