import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [arrayMovieByQuery, setArrayMoviebyQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (query === '') {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(results => {
        setArrayMoviebyQuery(results.data.results);
      });
  }, [query]);
  //   const updateQueryString = movie => {
  //     const nextParams = movie !== '' ? { movie } : {};
  //     updateQueryString(nextParams);
  //   };
  return (
    <>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          setQuery(inputValue);
          setSearchParams({ movie: inputValue });
        }}
      >
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={e => {
            setInputValue(e.currentTarget.value);
          }}
        />
        <label htmlFor="search"></label>
        <button type="submit">Search</button>
      </form>
      {arrayMovieByQuery.length > 1 && (
        <ul>
          {arrayMovieByQuery.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
