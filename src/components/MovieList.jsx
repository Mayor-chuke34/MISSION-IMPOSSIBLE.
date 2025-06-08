import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
            {movies.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
            ))}
        </div>
    );
}

export default MovieList;