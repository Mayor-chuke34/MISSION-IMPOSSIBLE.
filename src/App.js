import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDescription from "./components/MovieDescription"; 
import moviesData from "./moviesData";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= rateFilter
  );

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <Router>
      <div className="container py-4">
        <h1 className="text-center">🎬 Chuka's Movie App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
                <AddMovie onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
