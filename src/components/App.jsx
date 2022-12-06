import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { nanoid } from "nanoid";

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, addContact } from 'redux/store';

const App = () => {

  const [contacts, setContacts] = useState([]);

  // const contacts = useSelector((state) => state.contactsData.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) return;
    setContacts(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const dispatch = useDispatch();

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contact list.`);
      return;
    };

    // setContacts(prevState => [...prevState, { name, number, id: nanoid() }])
    const contactInfo = {
      prevState => [...prevState, { name, number, id: nanoid() }]
    }

dispatch(addContact())
  }

const onChangeFilter = e => {
  setFilter(e.target.value);
};

const getFilteredContacts = () => {
  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase())
  })
}

// const deleteContact = e => {
//   const toDeleteContactId = e.target.value;
//   setContacts(contacts.filter(contact => contact.id !== toDeleteContactId));
// }
const dispatch = useDispatch();

const deleteContact = (id) => {
  dispatch(deleteContact(id));
}

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
      <ContactForm addContact={addContact} />

      <h2 className={css.title}>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList contacts={filteredContacts} deleteContact={onDeleteContact} />
    </div >
  </div >
);
}


export { App };