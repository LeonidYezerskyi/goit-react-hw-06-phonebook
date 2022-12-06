import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, addContact } from 'redux/contactSlice/contactSlice';

const App = () => {

  const contacts = useSelector((state) => state.contactsData.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) return;
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addNewContact = (formData) => {
    dispatch(addContact(formData));
  }

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    })
  }

  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

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
        <Filter onChangeFilter={onChangeFilter} filter={filter} />
        <ContactList contacts={filteredContacts} deleteContact={onDeleteContact} />
      </div >
    </div >
  );
}


export { App };