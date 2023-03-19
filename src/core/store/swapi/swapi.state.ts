import { Pagination } from "src/shared/models/http.model";

export interface SwapiState {
  pagination: Pagination;
}

export interface SearchContentQuery {
  entity: string;
  name: string;
}