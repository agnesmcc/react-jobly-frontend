import { React, useState } from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css"

const SearchPage = ({ results }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
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
            {results.map((result) => (
                <div>
                    <SearchResult result={result} />
                </div> 
            ))}
        </form>
        </div>
    );
};

export default SearchPage;
