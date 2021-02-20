const axios = require('axios');
const BASE_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

exports.getMovies = async (limit, rating) => {
  try {
    const {
      data: {
        data: { movies }
      }
    } = await axios(LIST_MOVIES_URL, {
      params: {
        limit,
        minimum_rating: rating
      }
    });
    return movies;
  } catch (error) {
    console.error(error);
  }
};

exports.getMovie = async id => {
  try {
    const {
      data: {
        data: { movie }
      }
    } = await axios(MOVIE_DETAILS_URL, {
      params: {
        movie_id: id
      }
    });
    return movie;
  } catch (error) {
    console.error(error);
  }
};

exports.getSuggestions = async id => {
  try {
    const {
      data: {
        data: { movies }
      }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
      params: {
        movie_id: id
      }
    });
    return movies;
  } catch (error) {
    console.error(error);
  }
};