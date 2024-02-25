// TODO заменить TEST

import axios from 'axios';
let API_BASE_URL;
if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'TEST';
} else {
  API_BASE_URL = 'TEST';
}

const serverAPI = axios.create({
  baseURL: API_BASE_URL,
});

serverAPI.interceptors.request.use((request) => {
  request.headers['Content-Type'] = 'application/json';
  return request;
});

export { serverAPI };
