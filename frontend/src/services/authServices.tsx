// src/services/authService.ts
import axios from 'axios';

// Define types for the request payloads
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Set up Axios instance
const api = axios.create({
  baseURL: 'http://localhost:4000/api/users', // Update the base URL as per your server config
});

// Login function
export const login = async (data: LoginData) => {
  const response = await api.post('/login', data);
  return response.data;
};

// Register function
export const register = async (data: RegisterData) => {
  const response = await api.post('/register', data);
  return response.data;
};
