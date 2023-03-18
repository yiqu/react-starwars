
export interface HttpParams {
  [key: string]: any;
}


export interface Pagination {
  limit?: number;
  page: number;
  total_pages?: number;
  total_records?: number;
  next?: string | null;
  previous?: string | null;
}
export interface EntityHttpParams {
  entity: string;
  urlParams?: HttpParams;
  pagination: Pagination;
}

export interface HttpParamsWithSearch {
  httpParams: HttpParams;
  extra?: HttpParams | 'NO_CHANGE';
}

export interface GetHookProps {
  url: string;
  params?: HttpParams;
}

export interface HttpEntityProp {
  entityType: string;
  params?: HttpParams;
  sleep?: number;
}
