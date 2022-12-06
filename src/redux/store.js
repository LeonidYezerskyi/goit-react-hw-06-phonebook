import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';

export const store = configureStore({
  reducer: {
    contactsData: contactReducer,
  },
});
