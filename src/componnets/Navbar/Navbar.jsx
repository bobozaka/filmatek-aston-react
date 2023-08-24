import React from 'react';
import style from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={style.navbar__container}>
      <h1 className={style.navbar__logo}>Flixster</h1>
      <div>
        <button type="button" className={style.navbar__in}>
          Sign in
        </button>
        <button type="button" className={style.navbar__up}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
