import css from './filter.module.css';

const Filter = ({ filterContact }) => {
  return (
    <label className={css.label} htmlFor="filter">
      Find contacts by name
      <input
        type="text"
        id="filter"
        name="filter"
        className={css.input}
        onInput={filterContact}
      />
    </label>
  );
};

export default Filter;
