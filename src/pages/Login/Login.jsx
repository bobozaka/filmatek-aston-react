import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/AuthContext';
import styles from './Login.module.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    setError(''); // Изменено на setError('')
    try {
      await logIn(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <div className={styles.login__container}>
      <img
        className={styles.login__img}
        src="https://pressa.tv/uploads/posts/2020-01/1579194185_pressa_tv_glass.jpeg"
        alt="/"
      />
      <div className={styles.login__form}>
        <h1 className={styles.login__form_title}>Sign In</h1>
        {error ? <p>{error}</p> : null}
        <form onSubmit={handleSumbit} className={styles.login__form_container}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            autoComplete="email"
            className={styles.login__form_input}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={styles.login__form_input}
          />
          <button type="submit" className={styles.login__form_button}>
            Sign in
          </button>
          <div className={styles.login__form_checkbox_container}>
            <input type="checkbox" className={styles.login__form_checkbox} />
            <span>Remember me</span>
          </div>
          <p>
            <span>New to Flixster? </span>
            <Link to="/signup" className={styles.login__form_link}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
