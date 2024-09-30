import { React } from "react";
import "./JobResult.css";

const JobResult = ({ result }) => {
    return (
        <div className="jobresult">
            <h3>{result.title}</h3>
            <div>
                <p><b>Salary:</b> {result.salary}</p>
                <p><b>Equity:</b> {result.equity}</p>
                <p><b>Handle:</b> {result.companyHandle}</p>
            </div>
        </div>
    );
};

export default JobResult;