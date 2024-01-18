import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDublicate = ({ name }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizedName;
    });
    return Boolean(dublicate);
  };

  addContact = data => {
    if (this.isDublicate(data)) {
      return alert('Is already in contacts');
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(item => item.id !== id);
      return { contacts: newContact };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();

      return (
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter)
      );
    });
    return filteredContacts;
  };

  render() {
    const { addContact, deleteContact, changeFilter } = this;
    // const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className="blockPhonebook">
          <h1 className="titlePhonebook">Phonebook</h1>
          <div className="formWrapper">
            <ContactForm onSubmit={addContact} />
          </div>
          <h2>Contacts</h2>
          <Filter filter={this.state.filter} changeFilter={changeFilter} />

          {contacts.length > 0 ? (
            <ContactList items={contacts} deleteContact={deleteContact} />
          ) : (
            <p>No contacts found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
