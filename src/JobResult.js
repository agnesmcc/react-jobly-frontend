import { React } from "react";
import "./JobResult.css";

const JobResult = ({ result }) => {
    return (
        <div className="jobresult">
            <h3>{result.title}</h3>
            <div>
                {result.description}
            </div>
        </div>
    );
};

export default JobResult;