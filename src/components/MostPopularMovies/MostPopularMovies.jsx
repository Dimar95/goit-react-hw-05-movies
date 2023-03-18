import { Link } from 'react-router-dom';

const MostPopularMovies = ({ arrayFilms }) => {
  return (
    <ul>
      {arrayFilms.map(movie => {
        const { title, id } = movie;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MostPopularMovies;
