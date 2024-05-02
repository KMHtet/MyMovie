import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducer';
import rootSaga from 'src/rootSaga/index';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: appReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false, }).concat(middleware),
})

// Start rootSaga
sagaMiddleware.run(rootSaga);

// Setup Store persistence
const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export  { store, persistor };