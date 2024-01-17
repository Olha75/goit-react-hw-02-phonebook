import React from 'react';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ items, deleteContact }) => (
  <>
    <ul>
      {items.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  </>
);

export default ContactList;
