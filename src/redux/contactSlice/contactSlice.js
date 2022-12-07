import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    addContact(state, action) {
      state.contacts = action.payload;
    },

    deleteContact(state, action) {
      const contactId = action.payload;

      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
