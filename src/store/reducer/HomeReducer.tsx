import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BaseState} from './Model';

const initialState: BaseState = {
  content: {},
  loading: {},
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    
  },
});

export const {
} = homeSlice.actions;

export default homeSlice.reducer;
