import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';
import { fetchSignInMethodsForEmail, getAuth } from 'firebase/auth';
import { useUserAuth } from '../../context/AuthContext';
import styles from './Signup.module.scss';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Пароль должен содержать не менее 6 символов.');
      return;
    }

    if (!isEmail(email)) {
      setEmailError('Введите корректный адрес электронной почты.');
      return;
    }
    setEmailError('');

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        alert('Этот адрес электронной почты уже используется.');
        return;
      }

      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signup__container}>
      <div className={styles.signup__theam} />
      <img
        className={styles.signup__img}
        src="https://pressa.tv/uploads/posts/2020-01/1579194185_pressa_tv_glass.jpeg"
        alt="/"
      />
      <div className={styles.signup__form}>
        <h1 className={styles.signup__form_title}>Sign Up</h1>
        <form onSubmit={handleSumbit} className={styles.signup__form_container}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            type="email"
            placeholder="Email"
            autoComplete="email"
            className={styles.signup__form_input}
          />
          {emailError && <p className={styles.signup__form_error}>{emailError}</p>}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={styles.signup__form_input}
          />
          <button type="submit" className={styles.signup__form_button}>
            Sign Up
          </button>
          <div className={styles.signup__form_checkbox_container}>
            <input type="checkbox" className={styles.signup__form_checkbox} />
            <span>Remember me</span>
          </div>
          <p>
            <span>Already subscribed to Flixster? </span>
            <Link to="/login" className={styles.signup__form_link}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
