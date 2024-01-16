import css from './contactItem.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item}>
      {name}: {number}
      <button
        type="button"
        className={css.btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
