import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'components/ContactForm/initialState';

initialState = {
  name: '',
  email: '',
  isLogin: false,
};
const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: {
      reducer: (_, action) => {
        return action.payload;
      },
    },
  },
});

export const { setUser } = UserSlice.actions;

export const userReducer = UserSlice.reducer;
