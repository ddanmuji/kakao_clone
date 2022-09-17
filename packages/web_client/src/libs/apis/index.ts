import axios from 'axios';

const BASE_URL = <const>'http://localhost:8080';

const instance = (url: string) =>
  axios.create({
    baseURL: `${BASE_URL}/${url}`,
    withCredentials: true,
  });

export const chatInstance = instance('chat');
export const roomInstance = instance('room');
export const userInstance = instance('user');
