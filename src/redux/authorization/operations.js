import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (userCedentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userCedentials);
      token.set(response.data.token);
      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userCedentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userCedentials);
      token.set(response.data.token);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  token.unset();
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const currentState = thunkAPI.getState();
    const currentToken = currentState.auth.token;
    // console.log('currentUser', Boolean(currentToken));

    if (!currentToken) {
      return thunkAPI.rejectWithValue('no user');
    }
    token.set(currentToken);
    const response = await axios.get('/users/current');
    // console.log(response.data);
    return response.data;
  }
);