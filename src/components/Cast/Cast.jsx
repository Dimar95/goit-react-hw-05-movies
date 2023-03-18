import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();

  const [arrayCast, setArrayCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US`
      )
      .then(results => setArrayCast(results.data.cast));
  }, [movieId]);

  return (
    <div>
      <ul>
        {arrayCast.map(cast => {
          const { credit_id, profile_path, original_name, character } = cast;

          return (
            <li key={credit_id}>
              <img
                width="160px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
                }
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
