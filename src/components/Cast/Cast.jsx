import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import css from './Cast.module.css';

import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();

  const [arrayCast, setArrayCast] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US`
      )
      .then(results => setArrayCast(results.data.cast), setStatus('success'))
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

  return (
    <div>
      <ul className={css.castList}>
        {arrayCast.map(cast => {
          const { credit_id, profile_path, original_name, character } = cast;

          return (
            <li key={credit_id} className={css.castListItem}>
              <img
                className={css.castListImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                }
                alt={original_name}
              />
              <p className={css.castName}>{original_name}</p>
              <p className={css.castName}>Character: {character}</p>
            </li>
          );
        })}
      </ul>
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
    </div>
  );
};
export default Cast;
