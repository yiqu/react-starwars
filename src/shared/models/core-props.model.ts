/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import { HttpParams } from './http.model';
import { FavoriteToSave, MoviesFilterInput, StarwarsFilm } from './starwars.model';

export interface FetchMovieHookProp {
  params?: HttpParams;
}


export interface SortActionButton {
  display: 'descending' | 'ascending';
  value: string;
}

export interface FetchMovieDetailHookProp {
  movieId: string;
}

export interface FetchFavoritesHookProp {
  userId: string;
  params: HttpParams;
}

export interface SaveFavoriteHookProp {
  userId: string;
  film?: FavoriteToSave;
}

export interface FilmFilterProp {
  filterChange: (payload: string) => void;
  count?: number;
  placeholderText?: string;
  currentText?: string;
}