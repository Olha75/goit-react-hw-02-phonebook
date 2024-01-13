import { Component } from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  nameId = nanoid();
  telId = nanoid();

  render() {
    const { nameId, telId } = this;
    return (
      <form>
        <div>
          <label htmlFor="nameId">Name</label>
          <input
            id="nameId"
            type="text"
            name="name"
            required
            placeholder="Введіть імя"
          />
          <label htmlFor="telId">Number</label>
          <input
            id="telId"
            type="tel"
            name="number"
            required
            placeholder="формат +380ххххххххх"
          />
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
