import React from 'react';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './componnets/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Account from './pages/Account';
import Signup from './pages/Signup';
import ProtectedRoute from './componnets/ProtectedRoute';
import MovieDetail from './componnets/MovieDetail';

function App() {
  return (
    <div className={styles.App}>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
