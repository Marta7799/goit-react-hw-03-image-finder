import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(image => (
    <li
      onClick={() => onClick(image.id)}
      key={image.id}
      className={css.ImageGalleryItem}
    >
      <img
        className={css.ImageGalleryItemPhoto}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: propTypes.array.isRequired,
  onClick: propTypes.func.isRequired,
};
