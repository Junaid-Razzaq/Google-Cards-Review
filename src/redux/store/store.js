// store.js
import { configureStore } from '@reduxjs/toolkit';
import {usersApi} from "../reducers/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
    
});
setupListeners(store.dispatch)

export default store;
