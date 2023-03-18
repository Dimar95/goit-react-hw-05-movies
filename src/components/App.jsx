import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './page/Home/HomePage';
import Movies from './page/Movies/Movies';
import NotFound from './page/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
