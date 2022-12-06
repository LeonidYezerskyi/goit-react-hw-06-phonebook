import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
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
            contact.name.toLowerCase() ===
            finalContact.contactName.toLowerCase()
        )
      ) {
        console.log(state);

        alert(`${finalContact.contactName} is already in contact list.`);
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
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
