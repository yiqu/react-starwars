import { createSlice, createAction } from '@reduxjs/toolkit';
import { ContentEntity, HttpResponse, HttpResponse2, StarwarsContent, StarwarsPlanet } from 'src/shared/models/starwars.model';
import { FulfilledAction, PendingAction, RejectedAction } from 'src/shared/models/redux.model';
import {
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit';
import { EntityHttpParams, HttpParams } from 'src/shared/models/http.model';
import { fetchCoreEntityData } from './core.thunks';

export interface CoreEntitiesState extends EntityState<ContentEntity> {
}

export function selectIdentifer(config: ContentEntity) {
  return config.contentId;
}

export function comparator(a: ContentEntity, b: ContentEntity): number {
  if (+a.contentId > +b.contentId) {
    return 1;
  }
  return -1;
}

export const adapter = createEntityAdapter<ContentEntity>({
  selectId: selectIdentifer,
  sortComparer: comparator
});

export const coreEntitiesSlice = createSlice({
  name: 'otherCoreEntites',
  initialState: adapter.getInitialState<Partial<ContentEntity>>({
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoreEntityData.pending, (state, action: PendingAction<EntityHttpParams | undefined>) => {
      const entityId = action.meta.arg?.entity;
      if (entityId) {
        const payload: ContentEntity = {
          ...state.entities[entityId],
          contentId: entityId,
          apiLoading: true,
        };
        adapter.setOne(state, payload);
      }
    });
    builder.addCase(fetchCoreEntityData.fulfilled, (state, action: FulfilledAction<EntityHttpParams, HttpResponse<StarwarsContent>>) => {
      const entityId = action.meta.arg?.entity;
      if (entityId) {
        const payload: ContentEntity = {
          ...state.entities[entityId],
          contentId: entityId,
          apiLoading: false,
          error: false,
          errMsg: undefined,
          totalCount: action.payload.total_records,
          data: action.payload.results
        };
        adapter.setOne(state, payload);
      }
    });
    builder.addCase(fetchCoreEntityData.rejected, (state, action) => {
      const entityId = action.meta.arg?.entity;
      if (entityId) {
        const payload: ContentEntity = {
          ...state.entities[entityId],
          contentId: entityId,
          apiLoading: false,
          error: true,
          errMsg: action.error.message,
        };
        adapter.setOne(state, payload);
      }
    });
  },
});

export default coreEntitiesSlice.reducer;