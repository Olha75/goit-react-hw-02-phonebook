import css from './contactList.module.css';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ filtersContact, deleteContact }) => {
  return (
    <ol className={css.contactWrapper}>
      {filtersContact &&
        filtersContact.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          );
        })}
    </ol>
  );
};

export default ContactList;
