import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchResults from '../../componnets/SearchResults';
import styles from './SearchPage.module.scss';

function SearchPage() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQueryFromParams = searchParams.get('query');

    const fetchData = async (newQuery) => {
      setLoading(true);
      setQuery(newQuery);
      try {
        const response = await fetch(`/api/search?query=${newQuery}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    if (newQueryFromParams) {
      fetchData(newQueryFromParams);
    }
  }, [location.search]);

  return (
    <div className={styles.searchPage}>
      <h1 className={styles.searchPageTitle}>Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.searchResults}>
          <p>Query: {query}</p>
          <SearchResults results={searchResults} />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
