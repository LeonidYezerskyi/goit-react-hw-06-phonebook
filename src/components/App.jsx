import React from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { addContact } from 'redux/contactSlice/contactSlice';

const App = () => {

  const dispatch = useDispatch();

  const addNewContact = (formData) => {
    dispatch(addContact(formData));
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
      }}
    >
      <div className={css.paper}>
        <h1 className={css.title}> Phonebook</h1>
        <ContactForm addContact={addNewContact} />

        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div >
    </div >
  );
}


export { App };