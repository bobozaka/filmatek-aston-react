import axios from 'axios';

const key = process.env.REACT_APP_IMDB_API_KEY;

export default function truncateString(str, num) {
  if (str?.length > num) {
    return `${str.slice(0, num)}...`;
  }

  return str;
}

export const redirectToTrailer = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`,
    );
    const trailerKey = response.data.results[0]?.key;
    if (trailerKey) {
      window.location.href = `https://www.youtube.com/watch?v=${trailerKey}`;
    } else {
      alert('Trailer not available.');
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
    alert('Error fetching trailer.');
  }
};

export async function fetchMovieData(movieId) {
  if (!movieId) {
    throw new Error('Invalid movieId');
  }
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: key,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(`Request failed with status ${response.status}`);
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
}
export const searchMovies = async (query) => {
  try {
    if (query.trim() === '') {
      return [];
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`,
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
