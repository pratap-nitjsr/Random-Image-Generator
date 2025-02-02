import axios from 'axios';

const flaskapi = axios.create({
  baseURL: 'https://random-image-generator-flask.onrender.com/',
});

export default flaskapi;
