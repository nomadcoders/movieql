import axios from "axios";
const LIST_MOVIES_URL = "https://yts.am/api/v2/list_movies.json?";
const MOVIE_DETAILS_URL = "https://yts.am/api/v2/movie_details.json";

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = LIST_MOVIES_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  const {
    data: {
      data: { movies }
    }
  } = await axios(REQUEST_URL);
  return movies;
};

export const getMovie = async id => {
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
};
