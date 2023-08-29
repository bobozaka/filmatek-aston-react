import React from 'react';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss'; // Импорт стилей
import Navbar from './componnets/Navbar/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login/Login';
import Account from './pages/Account';
import Signup from './pages/Signup/Signup';
import ProtectedRoute from './componnets/ProtectedRoute';

function App() {
  return (
    <div className={styles.App}>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
