import React from 'react';
import {
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchTrendingQuery,
  useFetchUpcomingQuery,
  useFetchComedyQuery,
  useFetchDramaQuery,
} from '../redux/api';
import Main from '../componnets/Main';
import Row from '../componnets/Row';

function Home() {
  const { data: popularData } = useFetchPopularQuery();
  const { data: topRatedData } = useFetchTopRatedQuery();
  const { data: trendingData } = useFetchTrendingQuery();
  const { data: upcomingData } = useFetchUpcomingQuery();
  const { data: comedyData } = useFetchComedyQuery();
  const { data: dramaData } = useFetchDramaQuery();

  return (
    <div>
      <Main />
      <Row title="Popular" data={popularData?.results} />
      <Row title="Top Rated" data={topRatedData?.results} />
      <Row title="Trending" data={trendingData?.results} />
      <Row title="Up Coming" data={upcomingData?.results} />
      <Row title="Comedy" data={comedyData?.results} />
      <Row title="Drama" data={dramaData?.results} />
    </div>
  );
}

export default Home;
