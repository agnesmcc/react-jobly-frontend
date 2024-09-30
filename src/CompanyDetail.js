import {React, useEffect} from "react";
import { useParams } from "react-router-dom";
import './CompanyDetail.css';

const CompanyDetail = ({items, loading}) => {
    const {handle} = useParams();
    
    const item = items.find((item) => item.handle === handle);  
    console.log('Detail', item);

    if (loading || !item) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="companydetail">
            <h1 style={{textAlign: 'center'}}>{item.name}</h1>
            <p><b>About:</b> {item.description}</p>
            <p><b>Employees:</b> {item.numEmployees}</p>
        </div>
    );
};

export default CompanyDetail;
