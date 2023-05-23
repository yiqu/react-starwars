import { QueryFilter } from "../all/TableFilter";

export interface PersonalFilm {
  title: string;
  director: string;
  characters: string[];
  starships: string[];
  openingCrawl: string;
  planets: string;
  species: string[];
  vehicles: string[];
  canon: boolean;
  fireKey?: string;
}

export interface XhrFirebaseResult<T> {
  [fireKey: string]: T;
}

export interface PersonalFilmConfig {
  queryFilters: QueryFilter[];
}

export type PersonalFilmActions = 'edit' | 'delete';
export type PersonalFilmTableHeaderActions = 'adjust-width' | 'hide';