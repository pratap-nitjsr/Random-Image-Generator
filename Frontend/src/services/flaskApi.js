import axios from 'axios';

const flaskapi = axios.create({
  baseURL: 'https://random-image-generator-production.up.railway.app/',
});

export default flaskapi;