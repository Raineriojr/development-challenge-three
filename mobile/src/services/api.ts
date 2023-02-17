import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.78:3000',
  headers: {
    "Content-Type":"application/json"
  }
})