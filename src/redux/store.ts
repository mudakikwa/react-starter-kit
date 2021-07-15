import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './data/home/index';

const store=configureStore({
  reducer: {
    appData: appDataReducer,
  },
});

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch
export default store
