import axios from 'axios';

const flaskapi = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

export default flaskapi;