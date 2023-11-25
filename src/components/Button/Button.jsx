import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ handleClick }) => {
  return (
    <button className={css.Button} onClick={handleClick} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
