import { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { format, parse } from 'date-fns';
import css from './MoviesDetails.module.css';
const MoviesDetails = () => {
  const [activMovie, setActivMovie] = useState('');
  const [renderMovie, setRenderMovie] = useState('');
  const { movieId } = useParams();
  const firstRender = useRef(true);
  const location = useLocation();
  const [status, setStatus] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US`
      )
      .then(results => setActivMovie(results.data))
      .catch(error => {
        console.log(error.message);
        setStatus('error');
        toast.error(`${error.message}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
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
      img: poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://full-hd.info/komediya/kenny-1/kenny-1.jpg',
      date: data,
      userScore: vote_average,
      genres: genres.map(genre => ` ${genre.name}`),
      overview,
      title,
    });
  }, [activMovie, firstRender]);
  const backLinkHref = location.state?.from ?? '/movies';
  const { img, date, userScore, genres, overview, title } = renderMovie;
  return (
    <>
      <Link className={css.linkBack} to={backLinkHref}>
        Back to search
      </Link>

      <div className={css.movieContainer}>
        <div>
          <img className={css.imgMovie} src={img} alt={title} />
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
        <ul className={css.linkList}>
          <Link
            className={css.linkItem}
            to="cast"
            state={{ from: backLinkHref }}
          >
            Cast
          </Link>
          <Link
            className={css.linkItem}
            to="reviews"
            state={{ from: backLinkHref }}
          >
            Reviews
          </Link>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {status === 'error' && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </>
  );
};
export default MoviesDetails;
