import { Suspense, useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getMoviesDetailsById } from 'services/api';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getMoviesDetailsById(id).then(setMovie);
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <h1>{movie.title}</h1>
      <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
      <NavLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location?.state?.from ?? '/' }}>
        Reviews
      </NavLink>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
