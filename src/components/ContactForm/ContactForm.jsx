import { Component } from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { name: '', number: '' };

class ContactForm extends Component {
  nameId = nanoid();
  telId = nanoid();

  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { nameId, telId, handleSubmit } = this;
    const { name, number } = this.state;

    return (
      <form className={css.forma} onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <input
            value={name}
            onChange={this.handleChange}
            id={nameId}
            type="text"
            name="name"
            required
            placeholder="Введіть імя"
          />
          <label htmlFor={telId}>Number</label>
          <input
            value={number}
            onChange={this.handleChange}
            id={telId}
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
