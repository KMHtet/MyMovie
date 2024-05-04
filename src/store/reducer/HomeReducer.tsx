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
    getMovieListRequest: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        content: {
          ...state.content,
          [action.payload]: {...action.payload},
        },
      };
    },
  },
});

export const {
  getMovieListRequest
} = homeSlice.actions;

export default homeSlice.reducer;
