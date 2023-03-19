import { Link } from 'react-router-dom';
import css from './MostPopularMovies.module.css';

const MostPopularMovies = ({ arrayFilms }) => {
  return (
    <ul className={css.mostPopularMoviesList}>
      {arrayFilms.map(movie => {
        const { title, id } = movie;
        return (
          <li key={id} className={css.mostPopularMoviesItem}>
            <Link className={css.mostPopularMovies} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MostPopularMovies;
