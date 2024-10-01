import { React } from "react";
import "./JobResult.css";

const JobResult = ({ result }) => {
    return (
        <div className="jobresult">
            <h3>{result.title}</h3>
            <p>at {result.companyName}</p>
            <div>
                <p><b>Salary:</b> {result.salary ? `$${result.salary.toLocaleString()}` : "None specified"}</p>
                <p><b>Equity:</b> {result.equity ? `${result.equity} %` : "None"}</p>
                {/* <p><b>Handle:</b> {result.companyHandle}</p> */}
            </div>
        </div>
    );
};

export default JobResult;