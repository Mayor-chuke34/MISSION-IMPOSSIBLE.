import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
    return (
        <Card style={{ width: '100%' }} className="d-flex flex-row shadow my-3">

            {/* Movie Poster on the Left */}
            <Card.Img
                variant="left"
                src={movie.posterURL}
                style={{ width: "200px", objectFit: "cover" }}
            />

            {/* Movie Info on the Right */}
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>⭐ {movie.rating}</Card.Text>
                <a href={movie.posterURL} download>Watch trailer</a>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;

