import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_IMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchPopular: builder.query({
      query: () => ({
        url: `movie/popular?api_key=${apiKey}&language=en-US&page=1`,
        transformResponse: (response) => {
          const data = JSON.parse(response);
          return data.results;
        },
      }),
    }),
    fetchTopRated: builder.query({
      query: () => ({
        url: `movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
        transformResponse: (response) => {
          const data = JSON.parse(response);
          return data.results;
        },
      }),
    }),
    fetchTrending: builder.query({
      query: () => ({
        url: `trending/movie/day?api_key=${apiKey}`,
        transformResponse: (response) => {
          const data = JSON.parse(response);
          return data.results;
        },
      }),
    }),
    fetchUpcoming: builder.query({
      query: () => ({
        url: `movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
        transformResponse: (response) => {
          const data = JSON.parse(response);
          return data.results;
        },
      }),
    }),
    fetchComedy: builder.query({
      query: () => ({
        url: `discover/movie?api_key=${apiKey}&language=en-US&with_genres=35&page=1`,
        transformResponse: (response) => {
          const data = JSON.parse(response);
          return data.results;
        },
      }),
    }),
    fetchDrama: builder.query({
      query: () => ({
        url: `discover/movie?api_key=${apiKey}&language=en-US&with_genres=18&page=1`,
        transformResponse: (response) => {
          const data = JSON.parse(response);
          return data.results;
        },
      }),
    }),
  }),
});

export const {
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchTrendingQuery,
  useFetchUpcomingQuery,
  useFetchComedyQuery,
  useFetchDramaQuery,
} = api;

export default api;
