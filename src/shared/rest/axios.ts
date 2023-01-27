import axios, { AxiosError, AxiosResponse } from 'axios';

export interface HttpAction<T> {
  url: string;
  body?: any;
  abortController?: AbortController;
  onSuccess: (data: T) => void;
  onFailure: (errorData: any) => void;
  onFinally?: () => void;
}
/**
 * Create a Axios instance
 * @param baseUrl 
 * @returns 
 */
export const getAxiosInstance = (baseUrl: string) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  });
  return axiosInstance;
};

export const axiosGet = <T>({ url, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  axios.get(url)
  .then((res: AxiosResponse) => {
    onSuccess && onSuccess(res.data as T);
  })
  .catch((err: AxiosError) => {
    console.log("App error GET: ", err);
    onFailure && onFailure(err);
  })
  .finally(() => {
    onFinally && onFinally();
  });
};


export const axiosPost = <T>({ url, body, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  axios.post(url, body)
  .then((res: AxiosResponse) => {
    onSuccess && onSuccess(res.data);
  })
  .catch((err: AxiosError) => {
    console.log("App error POST: ", err);
    onFailure && onFailure(err);
  })
  .finally(() => {
    onFinally && onFinally();
  });
};

export const axiosPut = <T>({ url, body, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  axios.put(url, body)
  .then((res: AxiosResponse) => {
    onSuccess && onSuccess(res.data);
  })
  .catch((err: AxiosError) => {
    console.log("App error PUT: ", err);
    onFailure && onFailure(err);
  })
  .finally(() => {
    onFinally && onFinally();
  });
};

export const axiosDelete = <T>({ url, onSuccess, onFailure, onFinally, abortController }: HttpAction<T>) => {
  axios.delete(url)
  .then((res: AxiosResponse) => {
    onSuccess && onSuccess(res.data);
  })
  .catch((err: AxiosError) => {
    console.log("App error DELETE: ", err);
    onFailure && onFailure(err);
  })
  .finally(() => {
    onFinally && onFinally();
  });
};

export default getAxiosInstance;