import { React } from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
    return (
        <Link to={`/companies/${result.handle}`}>
        <div className="searchresult">
            <h3>{result.name}
            {result.title}</h3>
            <div>
                {result.description}
            </div>
        </div>
        </Link>
    );
};

export default SearchResult;