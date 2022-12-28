import axios from 'axios';

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
    //params: {A:"A",B:"B"}
  });
  return axiosInstance;
};

export default getAxiosInstance;