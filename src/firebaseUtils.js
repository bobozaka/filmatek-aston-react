import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import debounce from 'lodash';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const debouncedGetSearchHistory = debounce((callback) => {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  const collectionRef = collection(db, 'searchHistory');

  const q = query(collectionRef, where('userId', '==', user.uid));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const history = [];

    snapshot.forEach((historyDoc) => {
      history.push({
        id: historyDoc.id,
        query: historyDoc.data().searchQuery,
        url: historyDoc.data().url || '',
      });
    });

    callback(history);
  });

  return unsubscribe;
}, 300); 

export const saveSearchHistory = async (searchQuery) => {
  const user = auth.currentUser;

  if (user) {
    const searchHistoryCollection = collection(db, 'searchHistory');
    const encodedQuery = encodeURIComponent(searchQuery);
    const newSearch = {
      searchQuery,
      userId: user.uid,
      timestamp: new Date(),
      url: `${encodedQuery}`, 
    };

    try {
      await addDoc(searchHistoryCollection, newSearch);
    } catch (error) {
      console.error('Ошибка при сохранении истории поиска:', error);
    }
  }
};


export const getSearchHistory = (callback) => debouncedGetSearchHistory(callback);

export const deleteSearchHistory = async (searchQueryId) => {
  const user = auth.currentUser;

  if (!user) {
    return;
  }

  const searchHistoryDoc = doc(db, 'searchHistory', searchQueryId);

  try {
    await deleteDoc(searchHistoryDoc);
  } catch (error) {
    console.error('Ошибка при удалении истории поиска:', error);
  }
};

export const getSearchResults = async (url) => {
  const user = auth.currentUser;

  if (!user || !url) {
    return null;
  }

  const resultsCollection = collection(db, 'searchResults');

  const q = query(resultsCollection, where('userId', '==', user.uid), where('url', '==', url));

  try {
    const querySnapshot = await getDocs(q);
    const results = [];

    querySnapshot.forEach((resultDoc) => {
      results.push({ id: resultDoc.id, data: resultDoc.data() });
    });

    return results;
  } catch (error) {
    console.error('Ошибка при получении результатов по урлу:', error);
    return null;
  }
};
