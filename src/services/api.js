import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // عدل حسب السيرفر
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
