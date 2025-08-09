// API Configuration
const API_CONFIG = {
  // Development (local backend)
  development: {
    baseURL: 'http://localhost:3000',
    apiPrefix: '/api'
  },
  // Production (deployed backend)
  production: {
    baseURL: process.env.VITE_API_URL || 'https://backend-9g44.onrender.com', // Your deployed backend
    apiPrefix: '/api'
  }
};

// Get current environment
const environment = import.meta.env.MODE || 'development';
const config = API_CONFIG[environment];

// Create axios instance with base configuration
import axios from 'axios';

const apiClient = axios.create({
  baseURL: config.baseURL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor for authentication
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
export { config }; 