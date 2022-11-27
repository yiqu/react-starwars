
export interface HttpParams {
  [key: string]: any;
}

export interface GetHookProps {
  url: string;
  params?: HttpParams;
}