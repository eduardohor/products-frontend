
import axios from 'axios';
import Cookie from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_BASE}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

const token = Cookie.get('_myapp_token');

export const axiosInstanceToken = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_BASE}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `bearer ${token}`
  }
});

export default axiosInstance;