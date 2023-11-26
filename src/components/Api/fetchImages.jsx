import axios from 'axios';

// axios.defaults.baseURL = `https://pixabay.com/api`;

// export const fetchImages = async (inputValue, pageNr) => {
//   const response = await axios.get(
//     `/?q=${inputValue}&page=${pageNr}&key=39809012-794bb9f85c23fb448d6e12ec5&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data.hits.map(image => {
//     return {
//       id: image.id,
//       webformatURL: image.webformatURL,
//       largeImageURL: image.largeImageURL,
//       tags: image.tags,
//     };
//   });
// };

const API_KEY = '39809012-794bb9f85c23fb448d6e12ec5';

export const fetchImages = async (query, page, perPage) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`
  );
  return response.data;
};
