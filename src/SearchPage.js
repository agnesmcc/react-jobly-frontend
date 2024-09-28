import { React, useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css"

const SearchPage = ({ results, setResults }) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        setResults(search);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setResults(search);
        setSearch("");
    }

    return (
        <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
            <div className="input-group mx-auto searchpage-input">
                <input type="text" className="form-control"
                    placeholder="Search..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" className="btn btn-primary">Search</button>
            </div>
            { results.map((result) => (
                <SearchResult key={result.handle} result={result} />
            ))}
        </form>
        </div>
    );
};

export default SearchPage;
