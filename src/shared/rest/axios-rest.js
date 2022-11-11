import axios from 'axios';

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
  //params: {A:"A",B:"B"}
});

export const getAxiosInstance = () => {
  return axiosInstance;
};

export const axiosGet = (url, params = null) => {
  return axiosInstance.get(url + '.json', {
    params: params
  });
};

export const axiosPost = (url, data = null) => {
  return axiosInstance.post(url + '.json', data);
};

export default axiosInstance;