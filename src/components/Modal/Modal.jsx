import css from './Modal.module.css';
import propTypes from 'prop-types';

export const Modal = ({ clickImage, handleClose }) => {
  return (
    <div onClick={() => handleClose()} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={clickImage.largeImageURL} alt={clickImage.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  clickImage: propTypes.object.isRequired,
  handleClose: propTypes.func.isRequired,
};
