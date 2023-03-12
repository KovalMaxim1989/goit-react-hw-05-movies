import Navigation from "components/Navigation";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/> }>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movies/:id' element={<MovieDetails />} />
       </Route>
     </Routes>
    </div>
  );
};
