/* eslint-disable import/prefer-default-export */
import { articleResto } from '../views/view';

const baseUrl = './DATA.json';

const status = (response) => {
  if (response.status !== 200) {
    console.log(`Error : ${response.status}`);
    return Promise.reject(new Error(response.statusText));
  }
  return Promise.resolve(response);
};

const json = (response) => response.json();

const getRestaurants = () => {
  fetch(baseUrl)
    .then(status)
    .then(json)
    .then(articleResto)
    .catch((errors) => {
      console.log(`your error ${errors}`);
    });
};

export { getRestaurants };
