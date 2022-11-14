/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useReducer, useState, useContext, useMemo } from 'react';
import { HttpParams } from './http.model';

export interface FetchMovieHookProp {
  url: string;
  params?: HttpParams;
}


export interface SortActionButton {
  display: 'descending' | 'ascending';
  value: string;
}

export interface FetchMovieDetailHookProp {
  movieId: string;
}