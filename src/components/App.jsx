import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import axios from 'axios';

const Header = lazy(() => import('./Header/Header'));

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const MoviesDetails = lazy(() => import('./page/MoviesDetails/MoviesDetails'));
const NotFound = lazy(() => import('./page/NotFound/NotFound'));

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
