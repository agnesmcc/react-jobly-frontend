import { React, useState } from "react";

const SearchPage = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Search..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
        </>
    );
};

export default SearchPage;
