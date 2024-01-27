'use strict'

// store.js
import { configureStore } from '@reduxjs/toolkit';
import { swapiApi } from './services/swapiApi';

export const store = configureStore({
  reducer: {
    [swapiApi.reducerPath]: swapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapiApi.middleware),
});
