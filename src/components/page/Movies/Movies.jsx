import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './Movies.module.css';
import Loader from '../../Loader/Loader';

const Movies = () => {
  const [arrayMovieByQuery, setArrayMoviebyQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();
  const movieName = searchParams.get('query') ?? '';
  const [status, setStatus] = useState('');
  const [query, setQuery] = useState(() => movieName);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setStatus('loader');
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(results => {
        setArrayMoviebyQuery(results.data.results);
        setStatus(results.data.results.length > 0 ? 'success' : 'notFound');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('error');
        toast.error(`${error.message}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  }, [query]);

  return (
    <>
      <form
        action=""
        className={css.form}
        onSubmit={e => {
          e.preventDefault();
          setQuery(movieName);
        }}
      >
        <input
          className={css.inputSearch}
          type="text"
          name="search"
          value={movieName}
          onChange={e => {
            setSearchParams({ query: e.target.value });
          }}
        />
        <label htmlFor="search"></label>
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
      {status === 'success' && (
        <ul className={css.moviesList}>
          {arrayMovieByQuery.map(movie => (
            <li key={movie.id} className={css.moviesItem}>
              <Link
                className={css.moviesS}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === 'notFound' && <div>Movies not found</div>}
      {status === 'loader' && <Loader />}
      {status === 'error' && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </>
  );
};
export default Movies;
