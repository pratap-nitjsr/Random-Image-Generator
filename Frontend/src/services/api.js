import axios from 'axios';

const api = axios.create({
  baseURL: 'https://random-image-generator-q86a.onrender.com',
});

export default api;
