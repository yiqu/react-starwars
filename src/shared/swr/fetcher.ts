import axios, { AxiosResponse } from 'axios';
import { sleep } from "../utils/sleep";


export const axiosFetcher = async <T>(url: string, slow = 0) => {
  if (slow) {
    await sleep(slow);
  }
  return await axios.get<T>(url)
    .then((res: AxiosResponse<T, any>) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
        // return {TEST:"TEST"};
      } 
    });
};

export const axiosFetcher2 = async <T>(url: string) => {
  return await axios.get<T>(url)
    .then((res: AxiosResponse<T, any>) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
      } 
    });
};

export const appendKeyFireData = <T>(fireData: T) => {
  let res: FirebaseDataWithId<T>[] = [];
  const keys = Object.keys(fireData ?? []);
  keys.forEach((key) => {
    res.push({
      id: key,
      ...((fireData as any)[key])
    });
  });
  return res;
};

export type FirebaseDataWithId<T> = T & {id: string};