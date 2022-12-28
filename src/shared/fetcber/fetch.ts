import { sleep } from "../utils/sleep";

export const httpGetFetch = async <T>(url: string, slow = 0): Promise<T> => {
  if (slow) {
    await sleep(slow);
  }

  try {
    const res: Response = await window.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
    if (res.ok) {
      const data = await res.json() as T;
      return data as Promise<T>;
    }
    return Promise.reject(res);
  } catch (error) {
    throw error;
  }
};