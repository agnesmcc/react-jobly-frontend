import { React } from "react";
import "./CompanyResult.css";
import { Link } from "react-router-dom";

const CompanyResult = ({ result }) => {
    return (
        <Link to={`/companies/${result.handle}`}>
        <div className="companyresult">
            <h3>{result.name}</h3>
            <div>
                {result.description}
            </div>
        </div>
        </Link>
    );
};

export default CompanyResult;