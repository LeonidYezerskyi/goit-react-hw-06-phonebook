import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'conts',
  storage,
  whitelist: ['contacts'],
};

const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  contactReducer
);

const store = configureStore({
  reducer: {
    contactsData: contactsPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
