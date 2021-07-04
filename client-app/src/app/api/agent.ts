/* This file contains all of the app requests to the API */

import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

//create a function to delay the response by the certain amount of time
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

// delay all responses by 1000 ms to test the loading indicator functionality.
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

//Extract the body of the response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

//Create a requests object to hold axios templates
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

//Activities object hold api calls for CRUD operations
const Activities = {
  list: () => requests.get<Activity[]>('/activities'),
  details: (id: string) => requests.get<Activity>(`/Activities/${id}`),
  create: (activity: Activity) => requests.post<void>('/Activities', activity),
  update: (activity: Activity) => requests.put<void>(`Activities/${activity.id}`, activity),
  delete: (id: string) => requests.delete<void>(`/Activities/${id}`),
};

const agent = {
  Activities,
};

export default agent;
