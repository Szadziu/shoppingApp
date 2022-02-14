import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://shoppifier.herokuapp.com/api/',
});
