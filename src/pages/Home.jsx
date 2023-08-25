import React from 'react';
import Main from '../componnets/Main/Main';
import Row from '../componnets/Row/Row';
import requests from '../Requests';

function Home() {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
}

export default Home;
