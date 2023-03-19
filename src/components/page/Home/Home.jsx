import MostPopularMovies from '../../MostPopularMovies/MostPopularMovies';
import css from './Home.module.css';
const Home = ({ arrayFilms }) => {
  return (
    <>
      <h1 className={css.pageHead}>Trending today</h1>
      {arrayFilms.length > 0 && <MostPopularMovies arrayFilms={arrayFilms} />}
    </>
  );
};

export default Home;
