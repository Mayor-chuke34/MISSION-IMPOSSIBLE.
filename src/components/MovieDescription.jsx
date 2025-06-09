import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) return <h2>Movie not found</h2>;

    return (
        <div className="container mt-4">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <div className="ratio ratio-16x9 mb-3">
                <iframe
                    src={movie.TrailerURL.replace("watch?v=", "embed/")}
                    title={movie.title}
                    allowFullScreen
                ></iframe>
            </div>
            <Link to="/" className="btn btn-primary">⬅ Back to Home</Link>
        </div>
    );
}

export default MovieDescription;
