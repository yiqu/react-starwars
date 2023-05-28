import { StarwarsContent } from "src/shared/models/starwars.model";
import { QueryFilter } from "../all/PersonalFilmsTableFilter";

export interface PersonalFilm {
  title: string;
  director: string;
  characters: StarwarsContent[];
  starships: StarwarsContent[];
  openingCrawl: string;
  planets: StarwarsContent;
  species: StarwarsContent[];
  vehicles: StarwarsContent[];
  canon: boolean;
  fireKey?: string;
  isWorking?: boolean;
}

export interface PersonalFilmUpdate {
  fireKey: string;
  data: Partial<PersonalFilm>;
}

export interface XhrFirebaseResult<T> {
  [fireKey: string]: T;
}

export interface PersonalFilmConfig {
  queryFilters: QueryFilter[];
}

export type PersonalFilmActions = 'edit' | 'delete';
export type PersonalFilmTableHeaderActions = 'adjust-width' | 'hide';