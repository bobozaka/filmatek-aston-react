import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import api from './api';

import rootReducer from './reducers';
import customMiddleware from './middleware/customMiddleware';

const store = configureStore({
  reducer: {
    api: api.reducer,
    app: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, customMiddleware),
});

setupListeners(store.dispatch);

export default store;
