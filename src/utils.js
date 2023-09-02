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
