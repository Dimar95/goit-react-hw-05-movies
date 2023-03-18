import MostPopularMovies from '../../MostPopularMovies/MostPopularMovies';
const Home = ({ arrayFilms }) => {
  return (
    <>
      {arrayFilms.length > 0 && <MostPopularMovies arrayFilms={arrayFilms} />}
    </>
  );
};

export default Home;
