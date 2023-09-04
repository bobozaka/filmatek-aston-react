import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/AuthContext';
import SearchBar from '../SearchBar';
import styles from './Navbar.module.scss';

function Navbar() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.navbar__container}>
      <Link to="/">
        <h1 className={styles.navbar__logo}>Flixster</h1>
      </Link>
      <SearchBar />
      {user?.email ? (
        <div>
          <Link to="/account">
            <button type="button" className={styles.navbar__in}>
              Account
            </button>
          </Link>
          <button onClick={handleLogout} type="button" className={styles.navbar__up}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button type="button" className={styles.navbar__in}>
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className={styles.navbar__up}>
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
