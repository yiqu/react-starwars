import { StarwarsPlanet } from "src/shared/models/starwars.model";

export interface CharactersState {
  currentCharacterHomeWorld?: StarwarsPlanet;
  apiLoading: boolean;
  error: boolean;
  errMsg?: string;
  characterHomePlanetApiLoading?: boolean;
  characterHomePlanetApiError?: boolean;
  characterHomePlanetApiErrMsg?: string;
}

export interface UrlThunkParam {
  url: string;
}