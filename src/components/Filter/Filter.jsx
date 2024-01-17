import css from './filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={css.label} htmlFor="filter">
      Find contacts by name
      <input
        className={css.search}
        onChange={changeFilter}
        value={filter}
        name="filter"
        placeholder="Search"
      />
    </label>
  );
};

export default Filter;
