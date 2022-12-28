import { AxiosResponse } from 'axios';
import { HttpParams } from '../models/http.model';
import getAxiosInstance from '../rest/axios';

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/';

const kqAxiosInstance = getAxiosInstance(BASE_URL);

export const axiosGet = async <T>(url: string, params: HttpParams | null = null): Promise<T> => {
  try {
    const res: AxiosResponse<T, any> = await kqAxiosInstance.get<T>(url + '.json', {
      params: params
    });
    if (res.status === 200) {
      return res.data;
    }
    return Promise.reject(res);
  } catch (error) {
    console.error("App error", error);
    throw error;
  }
};

export const axiosPost = <T>(url: string, data?: T) => {
  return kqAxiosInstance.post<T>(url + '.json', data)
  .then((res: AxiosResponse) => {
    return res.data;
  })
  .catch((err) => {
    console.log("App error POST: ", err);
    throw err;
  });
};

export const axiosPut = <T>(url: string, data?: T) => {
  return kqAxiosInstance.put<T>(url + '.json', data);
};

export const axiosDelete = <T>(url: string, data?: T) => {
  return kqAxiosInstance.delete<T>(url + '.json');
};