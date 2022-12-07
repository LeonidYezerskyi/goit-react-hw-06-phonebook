import React from 'react';
import css from './ContactList.module.css';
import ContactElement from '../ContactElement/ContactElement';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector((state) => state.contactsData.contacts);
    const filter = useSelector((state) => state.contactsData.filter);

    const filteredContacts = contacts.filter(
        contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.list}>
            {filteredContacts.map(({ id, name, number }) => {
                return <ContactElement name={name} number={number} key={id} id={id} />
            })}
        </ul>
    )
}

export default ContactList;