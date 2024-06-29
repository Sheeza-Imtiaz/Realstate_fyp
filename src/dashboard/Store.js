import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loggedInUsers: [],
    error: null,
  },
  reducers: {
    fetchLoggedInUsersSuccess: (state, action) => {
      state.loggedInUsers = action.payload;
      state.error = null;
    },
    fetchLoggedInUsersFailure: (state, action) => {
      state.loggedInUsers = [];
      state.error = action.payload;
    },
    deleteUser: (state, action) => {
      state.loggedInUsers = state.loggedInUsers.filter(user => user.id !== action.payload);
    },
  },
});

export const { fetchLoggedInUsersSuccess, fetchLoggedInUsersFailure, deleteUser } = usersSlice.actions;

export const selectLoggedInUsers = state => state.users.loggedInUsers;

export const fetchLoggedInUsers = () => async dispatch => {
  try {
    const response = await axios.get('http://192.168.12.105:8001/real_estate/users/');
    dispatch(fetchLoggedInUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchLoggedInUsersFailure(error.message));
  }
};

export const deleteLoggedInUser = userId => async dispatch => {
  try {
    await axios.delete(`http://192.168.12.105:8001/real_estate/users/${userId}/`);
    dispatch(deleteUser(userId));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});
