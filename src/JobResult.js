import { React, useContext } from "react";
import "./JobResult.css";
import { UserContext } from "./UserContext";
import JoblyApi from "./Api";

const JobResult = ({ result }) => {
    const { user, refreshUser } = useContext(UserContext);

    const applyToJob = async () => {
        await JoblyApi.applyToJob(user.username, result.id);
        refreshUser();
    };

    return (
        <div className="jobresult">
            <h3>{result.title}</h3>
            <p>at {result.companyName}</p>
            <div>
                <p><b>Salary:</b> {result.salary ? `$${result.salary.toLocaleString()}` : "None specified"}</p>
                <p><b>Equity:</b> {result.equity ? `${result.equity} %` : "None"}</p>

                {user.applications.includes(result.id) ? 
                     <button className="btn btn-primary" disabled>Applied</button> : 
                     <button className="btn btn-primary" onClick={applyToJob}>Apply</button>
                }
            </div>
        </div>
    );
};

export default JobResult;