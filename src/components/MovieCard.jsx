import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
    const navigate = useNavigate(); 

    return (
        <Card
            style={{ width: "100%", cursor: "pointer" }}
            className="d-flex flex-row shadow my-3"
            onClick={() => navigate(`/movie/${movie.id}`)} 
        >
            <Card.Img
                src={movie.posterURL}
                alt={movie.title}
                style={{ width: "200px", objectFit: "cover" }}
            />

            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>⭐ {movie.rating}</Card.Text>

                <a
                    href={movie.TrailerURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} 
                >
                    <Button variant="primary">▶ Watch Trailer</Button>
                </a>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
