import { serverAPI } from './axios-instance';

export function fetchData() {
  return serverAPI
    .get()
    .then((response) => response)
    .catch((error) => console.log(error));
}
