import { httpGet } from 'src/shared/fetcber/axios';
import { HttpParams } from 'src/shared/models/http.model';
import { sleep } from "../../shared/utils/sleep";


export const axiosFetcher = async <T>(url: string, params?: HttpParams, slow = 0) => {
  if (slow) {
    await sleep(slow);
  }
  return await httpGet<T>(url)
    .then((res: T) => {
      return res;
    })
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
        // return {TEST:"TEST"};
      } 
    });
};
