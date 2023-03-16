import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SwapiApiState } from './api.state';
import { EntityHttpParams } from 'src/shared/models/http.model';
import { starwarsContentApi } from './api';

const initialState: SwapiApiState = {
  entityData: {}
};

const swapiSlice = createSlice({
  name: 'swapiConfig',
  initialState,
  reducers: {
    updatePagination: (state, action: PayloadAction<EntityHttpParams>) => {
      if (state.entityData[action.payload.entity]?.pagination) {
        state.entityData[action.payload.entity].pagination.page = action.payload.pagination.page;
      }
    }
  },
  extraReducers: (builder) => {
    // builder.addMatcher(starwarsContentApi.endpoints.fetchEntityById.matchPending, (state, action) => {
    //   const args = action.meta.arg.originalArgs;
    //   state.selectedEntity = args.entity;
    //   if (!state.entityData[args.entity]) {
    //     state.entityData[args.entity] = {
    //       entity: args.entity,
    //       pagination: {
    //         total_pages: 0,
    //         total_records: 0
    //       }
    //     };
    //   }
    // });
    // builder.addMatcher(starwarsContentApi.endpoints.fetchEntityById.matchFulfilled, (state, action) => {
    //   const args = action.meta.arg.originalArgs;
    //   const payload = action.payload;
    //   state.entityData[args.entity].pagination.next = payload.next;
    //   state.entityData[args.entity].pagination.previous = payload.previous;
    //   state.entityData[args.entity].pagination.total_pages = payload.total_pages;
    //   state.entityData[args.entity].pagination.total_records = payload.total_records;
    // });
  }
});

export const { updatePagination } = swapiSlice.actions;
export default swapiSlice.reducer;