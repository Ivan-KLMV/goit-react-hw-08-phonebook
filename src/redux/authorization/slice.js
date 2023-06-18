import { createSlice } from '@reduxjs/toolkit';
import { refreshCurrentUser, logIn, logOut, registration } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const selectUser = state => state.auth.user;
export const isLoggedIn = state => state.auth.isLoggedIn;
export const isRefreshing = state => state.auth.isRefreshing;
export const userSlice = authorizationSlice.reducer;
