import axios from 'axios';

const api = axios.create({
  baseURL: 'https://random-image-generator-wr8i.vercel.app/',
});

export default api;
