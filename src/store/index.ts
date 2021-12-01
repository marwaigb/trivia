import { configureStore } from '@reduxjs/toolkit';
import triviaRuducer from './triviaSlice';

const store = configureStore({
  reducer: {
    trivia: triviaRuducer
    ,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
