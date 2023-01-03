/* eslint-disable @typescript-eslint/no-unused-vars */

export interface HttpAction<T> {
  url: string;
  body?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  abortController?: AbortController;
  onSuccess: (data: T) => void;
  onFailure: (errorData: any) => void;
  onFinally?: () => void;
}

export const fetchGet = <T>({ url, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  httpAction({ url, onSuccess, onFailure, onFinally, abortController, method: 'GET' });
};

export const fetchPost = <T>({ url, body, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  httpAction({ url, body, onSuccess, onFailure, onFinally, abortController, method: 'POST' });
};

export const fetchPut = <T>({ url, body, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  httpAction({ url, body, onSuccess, onFailure, onFinally, abortController, method: 'PUT' });
};

export const fetchDelete = <T>({ url, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  httpAction({ url, onSuccess, onFailure, onFinally, abortController, method: 'DELETE' });
};

const httpAction = <T>({ url, body, onSuccess, onFailure, onFinally, abortController, method }: HttpAction<T>) => {
  const defaultHeader: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    signal: abortController?.signal
  };

  window.fetch(url, {
    body: JSON.stringify(body),
    ...defaultHeader
  })
  .then((res: Response) => {
    if (res.ok) {
      return res.json() as Promise<T>;
    }
    return Promise.reject(res);
  })
  .then(
    (data: T) => {
      onSuccess && onSuccess(data);
    }, 
    (err: Response | TypeError | any) => {
      console.error("Fetch error", err);
      if (err instanceof Response) {
        err.json().then((errData) => {
          onFailure && onFailure(errData);
        });
      } else if (err instanceof TypeError) {
        onFailure && onFailure(err);
      } else {
        onFailure && onFailure(err);
      }
    }
  )
  .finally(() => {
    onFinally && onFinally();
  });
};

const httpAction2 = async <T>({ url, body, onSuccess, onFailure, onFinally, abortController, method }: HttpAction<T>) => {
  const defaultHeader: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    signal: abortController?.signal
  };

  const response: Response = await window.fetch(url, {
    body: JSON.stringify(body),
    ...defaultHeader
  });
  
  const jsonData = await response.json() as T;

  if (response.ok) {
    onSuccess && onSuccess(jsonData);
  } else {
    console.error("Fetch error", response, jsonData);
    onFailure && onFailure(jsonData);
  }

  onFinally && onFinally();

};
