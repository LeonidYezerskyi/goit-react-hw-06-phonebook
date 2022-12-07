import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    addContact(state, action) {
      const contactPart = action.payload;
      const finalContact = {
        id: nanoid(),
        ...contactPart,
      };

      if (
        state.contacts.some(
          contact =>
            contact.name.toLowerCase() === finalContact.name.toLowerCase()
        )
      ) {
        alert(`${finalContact.name} is already in contact list.`);
        return;
      }

      state.contacts = [finalContact, ...state.contacts];
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
