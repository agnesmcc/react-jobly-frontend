import { React } from "react";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
    return (
        <div className="searchresult">
            <h3>{result.name}
            {result.title}</h3>
            <div>
                {result.description}
            </div>
        </div>
    );
};

export default SearchResult;