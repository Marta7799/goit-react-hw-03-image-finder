import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="input"
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
