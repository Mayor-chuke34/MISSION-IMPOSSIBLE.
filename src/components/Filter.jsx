function Filter({ setTitleFilter, setRateFilter }) {
    return (
        <div className="d-flex justify-content-center gap-3 my-3">
            <input
                type="text"
                placeholder="Filter by title"
                onChange={(e) => setTitleFilter(e.target.value)}
            />
            <input
                type="number"
                placeholder="Filter by rating"
                onChange={(e) => setRateFilter(Number(e.target.value))}
            />
        </div>
    );
}

export default Filter;