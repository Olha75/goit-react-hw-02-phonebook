// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = newContact => {
//     const newName = newContact.name.toLowerCase();
//     const { contacts } = this.state;
//     const isDublContact = contacts.find(
//       ({ name }) => name.toLowerCase() === newName
//     );

//     if (!isCheckedContact) {
//       newContact.id = nanoid();

//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     } else {
//       Notify.failure(`${newContact.name} is already in contacts`);
//     }
//   };

//    filterContacts = () => {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter)
//     );
//     return filter === '' ? contacts : filteredContacts;
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
//     }));
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <div className="blockPhonebook">
//         <h1 className="phonebook">Phonebook</h1>
//         <ContactForm onAddContact={this.addContact } />
//         <h2>Contacts</h2>
//         <ContactList items={this.filterContacts()} onDeleteContact={this.deleteContact} />
//       </div>
//     </div>
//   );
// };

// export default App;

import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactItem from './ContactList/ContactItem/ContactItem';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const newName = newContact.name.toLowerCase();
    const { contacts } = this.state;
    const isDublContact = contacts.find(
      ({ name }) => name.toLowerCase() === newName
    );

    if (!isDublContact) {
      newContact.id = nanoid();

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      Notify.failure(`${newContact.name} is already in contacts`);
    }
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return filter === '' ? contacts : filteredContacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
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
          <h1 className="phonebook">Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter />
          <ContactList
            items={this.filterContacts()}
            onDeleteContact={this.deleteContact}
          />
          <ContactItem />
        </div>
      </div>
    );
  }
}

export default App;
