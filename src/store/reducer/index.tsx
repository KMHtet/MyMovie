import {persistCombineReducers, Storage} from 'redux-persist';
import Config from 'react-native-config';


// ================= MAPPING ANY REDUCER =================
const reducers = {
};

// ============ CUSTOM STORE WITH MMKV ===================
export const reduxStorage: Storage = {
  getItem: function (key: string, ...args: any[]) {
    throw new Error('Function not implemented.');
  },
  setItem: function (key: string, value: any, ...args: any[]) {
    throw new Error('Function not implemented.');
  },
  removeItem: function (key: string, ...args: any[]) {
    throw new Error('Function not implemented.');
  }
};

// ===============  CONFIG STORE =========================
const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: 10000,
  whitelist: ['movie'],
};

// ================== EXPORT APP REDUCER =================
export const appReducer = persistCombineReducers(persistConfig, reducers);

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
