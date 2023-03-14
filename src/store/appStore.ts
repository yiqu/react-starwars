import { configureStore } from '@reduxjs/toolkit';
import { starwarsContentApi } from 'src/core/services/api';
import { allFilmsSlice } from 'src/core/store/all-films/films.reducer';
import charactersReducer from 'src/core/store/characters/characters.reducer';
import coreEntitiesReducer from 'src/core/store/core-others/core.reducer';
import { favoriteFilmslice } from 'src/core/store/favorites/favorites.reducer';
import planetsReducer from 'src/core/store/planets/planets.reducer';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const appStore = configureStore({
  reducer: {
    allFilms: allFilmsSlice.reducer,
    favoriteFilms: favoriteFilmslice.reducer,
    characters: charactersReducer,
    planets: planetsReducer,
    coreEntities: coreEntitiesReducer,
    [starwarsContentApi.reducerPath]: starwarsContentApi.reducer
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(starwarsContentApi.middleware);
  },
  
  devTools: {
    trace: true,
    name: 'Starwars DB - SWDB'
  },
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(appStore.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
