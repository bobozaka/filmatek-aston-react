import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getSearchHistory, deleteSearchHistory, getSearchResults } from '../../firebaseUtils';
import styles from './SearchHistoryPage.module.scss';

function SearchHistoryPage() {
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);

      if (authUser) {
        const unsubscribeHistory = getSearchHistory((history) => {
          setSearchHistory(history);
        });

        return () => {
          if (unsubscribe) {
            unsubscribe();
          }
          if (unsubscribeHistory) {
            unsubscribeHistory();
          }
        };
      }

      return undefined;
    });
  }, [auth]);

  const handleUrlClick = async (url) => {
    if (!url) {
      return;
    }

    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.searchParams.has('query')) {
        const query = parsedUrl.searchParams.get('query');
        const searchResults = await getSearchResults(query);
        navigate(`/search?query=${encodeURIComponent(query)}`, { state: { searchResults } });
      }
    } catch (error) {
      console.error('Ошибка при обработке URL:', error);
    }
  };

  const handleDeleteUrl = (urlId) => {
    deleteSearchHistory(urlId);
    setSearchHistory((prevHistory) => prevHistory.filter((item) => item.id !== urlId));
  };

  const handleClearHistory = () => {
    searchHistory.forEach((item) => deleteSearchHistory(item.id));
    setSearchHistory([]);
  };

  return (
    <div className={styles.page__container}>
      <h1 className={styles.page__title}>Search History</h1>
      <p>{user ? `Пользователь: ${user.email}` : 'Пользователь не авторизован'}</p>
      <ul className={styles.history__list}>
        {searchHistory.map((item) => (
          <li key={item.id} className={styles.history__item}>
            <button type="button" onClick={() => handleUrlClick(item.url)}>
              {item.query}
            </button>
            <button
              type="button"
              onClick={() => handleDeleteUrl(item.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {searchHistory.length > 0 && (
        <button type="button" onClick={handleClearHistory} className={styles.button}>
          Сlear history
        </button>
      )}
      <button type="button" onClick={() => navigate('/')} className={styles.button}>
        Go Home
      </button>
    </div>
  );
}

export default SearchHistoryPage;
