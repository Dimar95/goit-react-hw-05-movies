import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();

  const [arrayReviews, setArrayReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}//reviews?api_key=0fe50c86842745b16f2f012241d0925e&language=en-US&page=1`
      )
      .then(results => setArrayReviews(results.data.results));
  }, [movieId]);

  return (
    <div>
      {arrayReviews.length > 0 ? (
        <ul>
          {arrayReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
};

export default Reviews;
