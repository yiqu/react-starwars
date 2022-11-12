import { AxiosResponse } from 'axios';
import { HttpParams } from 'src/shared/models/http.model';
import { axiosStarwarsGet } from 'src/shared/rest/starwars-api';
import { sleep } from "../../shared/utils/sleep";


export const axiosFetcher = async <T>(url: string, params?: HttpParams, slow = 0) => {
  if (slow) {
    await sleep(slow);
  }
  return await axiosStarwarsGet<T>(url, params)
    .then((res: AxiosResponse<T, any>) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) {
        throw error;
        // return {TEST:"TEST"};
      } 
    });
};
