import { useState } from "react";

function AddMovie({ onAdd }) {
    const [newMovie, setNewMovie] = useState({ title: "", description: "", posterURL: "", rating: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(newMovie);
        setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-row align-items-center justify-content-center gap-2 my-3 flex-wrap">
            <input
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="form-control w-auto"
            />
            <input
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                placeholder="Description"
                required
                className="form-control w-auto"
            />
            <input
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleChange}
                placeholder="Poster URL"
                required
                className="form-control w-auto"
            />
            <input
                name="rating"
                type="number"
                value={newMovie.rating}
                onChange={handleChange}
                placeholder="Rating"
                required
                className="form-control w-auto"
                min="0"
                max="10"
                step="0.1"
            />
            <button type="submit" className="btn btn-primary">
                Add Movie
            </button>
        </form>

    );
}

export default AddMovie;
