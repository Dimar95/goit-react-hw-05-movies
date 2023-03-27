import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log('🚀 ~ timeoutId:');

    const timeoutId = setTimeout(() => {
      setStatus(true);
      console.log('🚀 ~ timeoutId:', timeoutId);
    }, 3000);
  }, []);

  return status ? (
    <Navigate to="/" replace={true} />
  ) : (
    <div className={css.notFoundcontainer}>
      <p className={css.oops}>Oops!!!</p>
      <p className={css.message}>
        This page was not found. We will redirect you to the home page
      </p>
    </div>
  );
};
export default NotFound;
