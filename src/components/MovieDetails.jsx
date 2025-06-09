import { useParams, useNavigate } from 'react-router-dom';
import movieData from './movieData'; 

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movieData.find(m => m.id === parseInt(id));

    if (!movie) return <p>Movie not found</p>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title={movie.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <br />
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

export default MovieDetails;
