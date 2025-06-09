import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard({ movie }) {
    return (
        <Card style={{ width: "100%" }} className="d-flex flex-row shadow my-3">
            {/* Movie Poster on the Left */}
            <Card.Img
                src={movie.posterURL}
                style={{ width: "200px", objectFit: "cover" }}
            />

            {/* Movie Info on the Right */}
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>⭐ {movie.rating}</Card.Text>

                {/* YouTube Trailer Button */}
                <a
                    href={movie.TrailerURL} // ✅ match capital "T" from your data
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="blue">▶ Watch Trailer</Button>
                </a>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
