import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
type responseType = {
  data:{
    token: string;
  user: {
    _id: string;
    email: string;
  };
  }
};
const setAuthToken = async (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await AsyncStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    await AsyncStorage.removeItem('token');
  }
};

export const login = async (email, password) => {
  try {
    const res:responseType = await axios.post('http://localhost:5000/api/users/login', { email, password });
    await setAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
  try {
    const res:responseType = await axios.post('http://192.168.1.3:5000/api/users/register', { email, password });
    await setAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  await setAuthToken();
};

export const loadToken = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    setAuthToken(token);
    return token
  }
};