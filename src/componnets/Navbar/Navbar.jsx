import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import style from './Navbar.module.scss';

function Navbar() {
  const { user, logOut } = UserAuth();
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
    <div className={style.navbar__container}>
      <Link to="/">
        <h1 className={style.navbar__logo}>Flixster</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button type="button" className={style.navbar__in}>
              Account
            </button>
          </Link>
          <button onClick={handleLogout} type="button" className={style.navbar__up}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button type="button" className={style.navbar__in}>
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className={style.navbar__up}>
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
