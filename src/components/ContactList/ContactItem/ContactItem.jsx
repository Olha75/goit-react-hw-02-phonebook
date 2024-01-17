// import css from './contactItem.module.css';
import React from 'react';

const ContactItem = ({ id, name, number, deleteContact }) => (
  <li key={id}>
    {name} {number}
    <button onClick={() => deleteContact(id)} type="button">
      Delete
    </button>
  </li>
);

export default ContactItem;
