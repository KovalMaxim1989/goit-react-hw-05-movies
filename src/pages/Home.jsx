import { getTrendMovies } from 'services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
