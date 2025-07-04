import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://otp-authentication-assignment.onrender.com/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token from localStorage if available
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;