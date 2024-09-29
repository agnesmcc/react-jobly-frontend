import {React, useEffect} from "react";
import { useParams } from "react-router-dom";

const DetailPage = ({items, loading}) => {
    const {handle} = useParams();
    
    const item = items.find((item) => item.handle === handle);  
    console.log('Detail', item);

    if (loading || !item) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{item.name}</h1>
            {item.description}
            {item.numEmployees}
        </div>
    );
};

export default DetailPage;
