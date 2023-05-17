import { Pagination } from "src/shared/models/http.model";

export interface SwapiState {
  pagination: {
    [entityId: string]: ContentPagination;
  };
}

export interface SearchContentQuery {
  entity: string;
  name: string;
}

export interface StarwarsSpecieEditable<T> {
  entityId: string;
  editable: T;
}

export interface ContentPagination {
  pagination: Pagination;
  entityId: string;
}