import { configureStore } from '@reduxjs/toolkit';
import { allFilmsSlice } from 'src/core/store/all-films/films.reducer';
import charactersReducer from 'src/core/store/characters/characters.reducer';
import { favoriteFilmslice } from 'src/core/store/favorites/favorites.reducer';
import planetsReducer from 'src/core/store/planets/planets.reducer';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import swapiSliceReducer from 'src/core/store/swapi/swapi.reducer';
import swapiFilmsReducer from 'src/core/store/swapi-films/swapi-films.reducer';
import { starwarsContentApi } from 'src/core/store/swapi/swapi';
import { starwarsFilmsApi } from 'src/core/store/swapi-films/swapi-films';
import { starwarsFavoritesApi } from 'src/core/store/favorites/favorites.api';
import favoritesConfigReducer from 'src/core/store/favorites/favorites-config.reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// Persisted reducer config
const persistConfig = {
  key: "favoritesConfig",
  storage,
  stateReconciler: autoMergeLevel2
};

// Reducers to persist in storage
const persistedFavoritesReducer = persistReducer<ReturnType<typeof favoritesConfigReducer>>(persistConfig, favoritesConfigReducer);

export const appStore = configureStore({
  reducer: {
    allFilms: allFilmsSlice.reducer,
    favoriteFilms: favoriteFilmslice.reducer,
    characters: charactersReducer,
    planets: planetsReducer,
    [starwarsContentApi.reducerPath]: starwarsContentApi.reducer,
    [starwarsFilmsApi.reducerPath]: starwarsFilmsApi.reducer,
    swapiConfig: swapiSliceReducer,
    swapiFilmsConfig: swapiFilmsReducer,
    [starwarsFavoritesApi.reducerPath]: starwarsFavoritesApi.reducer,
    favoritesConfig: persistedFavoritesReducer
  },

  // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // needed for Redux-persist
      },
      thunk: true,
    }).concat(starwarsContentApi.middleware).concat(starwarsFilmsApi.middleware).concat(starwarsFavoritesApi.middleware);
  },
  
  devTools: {
    trace: true,
    name: 'Starwars DB - SWDB',
    actionsDenylist: ['__rtkq/focused', '__rtkq/unfocused']
  },
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(appStore.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const persistor = persistStore(appStore);