import { StarwarsPlanet } from "src/shared/models/starwars.model";

export interface CharactersState {
  currentCharacterHomeWorld?: StarwarsPlanet;
  apiLoading: boolean,
  error: boolean,
  errMsg?: string,
}

export interface UrlThunkParam {
  url: string;
}