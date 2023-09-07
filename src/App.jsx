import React, { lazy, Suspense } from 'react';
import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './componnets/Navbar';

import ProtectedRoute from './componnets/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Loading from './componnets/Loading';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Account = lazy(() => import('./pages/Account'));
const Signup = lazy(() => import('./pages/Signup'));

const MovieDetail = lazy(() => import('./componnets/MovieDetail'));

function App() {
  return (
    <div className={styles.App}>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <Suspense fallback={<Loading />}>
                <MovieDetail />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loading />}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense fallback={<Loading />}>
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              </Suspense>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
