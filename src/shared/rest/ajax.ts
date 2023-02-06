import { map } from 'rxjs';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';

export interface HttpAction<T> {
  url: string;
  body?: any;
  abortController?: AbortController;
  onSuccess: (data: T) => void;
  onFailure: (errorData: any) => void;
  onFinally?: () => void;
}

export const ajaxGet = <T>({ url, onSuccess, onFailure, onFinally }: HttpAction<T>) => {
  ajax<T>(url).pipe(
    map((res: AjaxResponse<T>) => {
      return res.response;
    })
  ).subscribe({
    next: (res: T) => {
      onSuccess(res);
    },
    error: (err: AjaxError) => {
      onFailure(err.message);
    },
    complete: () => {
      onFinally && onFinally();
    }
  });
};