import axios, { AxiosResponse } from "axios";

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
const defaultHeaders = {
  'Accept': 'application/json',
}

const handleSuccess = (response: AxiosResponse) => {
  if(!response.data.success) {
    Promise.reject('success: false');
  }
  return response.data
};

const Api = axios.create({
  baseURL: url,
  responseType: 'json',
  withCredentials: false,
  headers: defaultHeaders,
})

Api.interceptors.request.use(config => {
  const token = window.localStorage.getItem('Token');

  if (!!token && !!config.headers) {
    config.headers['Token'] = `${token}`;
  }
  return config;
}, function (error) {

  return Promise.reject(error);
});

export const ApiCall = (method: 'post' | 'get', url: string, data?: any) => {
  return Api[method](url, data).then(handleSuccess)
}
