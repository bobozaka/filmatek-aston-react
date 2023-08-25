import React from 'react';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss'; // Импорт стилей
import Navbar from './componnets/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
