import axios, { AxiosResponse } from 'axios';
import { sleep } from "../utils/sleep";

export const httpGet = async <T>(url: string, slow = 0): Promise<T> => {
  if (slow) {
    await sleep(slow);
  }
  try {
    const res: AxiosResponse<T, any> = await axios.get<T>(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });

    if (res.status === 200) {
      return res.data;
    }

    return Promise.reject(res);
  } catch (error) {
    console.error("App fetcher GET error:", error);
    throw error;
  }
};