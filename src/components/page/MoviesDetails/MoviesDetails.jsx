import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import { format, parse } from 'date-fns';
import css from './MoviesDetails.module.css';
const MoviesDetails = () => {
  const [activMovie, setActivMovie] = useState('');
  const [renderMovie, setRenderMovie] = useState('');
  const { movieId } = useParams();
  const firstRender = useRef(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US`
      )
      .then(results => setActivMovie(results.data));
  }, [movieId]);
  useMemo(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const { poster_path, title, release_date, vote_average, genres, overview } =
      activMovie;
    const data = format(parse(release_date, 'yyyy-mm-dd', new Date()), 'yyyy');
    setRenderMovie({
      img: `https://image.tmdb.org/t/p/w500/${poster_path}`,
      date: data,
      userScore: vote_average,
      genres: genres.map(genre => genre.name),
      overview,
      title,
    });
  }, [activMovie, firstRender]);
  const { img, date, userScore, genres, overview, title } = renderMovie;
  return (
    <>
      <div className={css.movieContainer}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h1>
            {title} ({date})
          </h1>
          <p>User Score: {userScore}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </div>
      <Outlet />
      <div>Now showing product with id - {movieId}</div>
    </>
  );
};
export default MoviesDetails;
