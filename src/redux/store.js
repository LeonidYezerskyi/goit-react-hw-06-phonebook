import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { taskReducer } from './reducer';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {},
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

export const store = configureStore({
  reducer: { contactsData: contactReducer },
});
