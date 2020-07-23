import axios from 'axios';

const fetchPhotos = async (search = 'dog') => {
  try {
    const result = await axios(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=25&client_id=${process.env.REACT_APP_API_KEY}`
    );
    return result.data.results;
  } catch (e) {
    console.warn(`WARNING: fetchPhotos FAILED - ${e}`);
  }
};

export default fetchPhotos;
