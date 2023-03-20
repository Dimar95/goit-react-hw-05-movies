import MostPopularMovies from '../../MostPopularMovies/MostPopularMovies';
import { useState, useEffect } from 'react';
import axios from 'axios';

import css from './Home.module.css';
const Home = () => {
  const [arrayFilms, setArrayFilms] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=0fe50c86842745b16f2f012241d0925e`
      )
      .then(results => setArrayFilms(results.data.results))
      .catch(error => console.log('🚀 ~ error:', error.message));
  }, []);
  return (
    <>
      <h1 className={css.pageHead}>Trending today</h1>
      {arrayFilms.length > 0 && <MostPopularMovies arrayFilms={arrayFilms} />}
    </>
  );
};

export default Home;
