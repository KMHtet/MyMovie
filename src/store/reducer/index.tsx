import HomeReducer from './HomeReducer';
import { combineReducers } from 'redux';

// ================= MAPPING ANY REDUCER =================
const reducers = {
  home: HomeReducer
};

// ================== EXPORT APP REDUCER =================
export const appReducer = combineReducers({
  data: reducers,
  // Add more reducers as needed
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
