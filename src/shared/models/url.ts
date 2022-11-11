export interface QueryObj {
  key: string;
  value: string;
};

export interface UrlQuery {
  urlSearchParams: URLSearchParams;
  allParams: QueryObj[];
};