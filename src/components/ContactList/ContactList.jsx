import React from 'react';
import { array, func } from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

function ContactList({ contactList, onDeleteContact }) {
  return (
    <ul className={s.contactList}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: array.isRequired,
  onDeleteContact: func.isRequired,
};

export default ContactList;
