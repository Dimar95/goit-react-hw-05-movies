import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from './page/NotFound/NotFound';
const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const MoviesDetails = lazy(() => import('./page/MoviesDetails/MoviesDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
