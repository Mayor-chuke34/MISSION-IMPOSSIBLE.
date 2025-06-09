import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import moviesData from "./moviesData";

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
    <div className="container py-4">
      <h1 className="text-center">🎬 Chuka`s Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />

    </div>
  );
}

export default App;
