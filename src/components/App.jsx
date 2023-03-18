import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Home from './page/Home/Home';
import Movies from './page/Movies/Movies';
import MoviesDetails from './page/MoviesDetails/MoviesDetails';
import NotFound from './page/NotFound/NotFound';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  const [arrayFilms, setArrayFilms] = useState([]);
  // const [activMovieId, setActivMovieId] = useState('');
  // const [activMovie, setActivMovie] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=0fe50c86842745b16f2f012241d0925e`
      )
      .then(results => setArrayFilms(results.data.results));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home arrayFilms={arrayFilms} />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={<MoviesDetails arrayFilms={arrayFilms} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
