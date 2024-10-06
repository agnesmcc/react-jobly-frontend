import {React, useContext} from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CompanyDetail.css';
import JobResult from "./JobResult";
import { JobsContext } from './JobsContext';
import { UserContext } from "./UserContext";

const CompanyDetail = ({items, loading}) => {
    const {handle} = useParams();
    const { jobs } = useContext(JobsContext);
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <Navigate to="/login" replace />
        );
    }
    
    const item = items.find((item) => item.handle === handle);  
    // console.log('Detail', item);

    const companyJobs = jobs.filter((job) => job.companyHandle === handle);
    // console.log('Jobs', companyJobs);
    
    if (loading || !item) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="companydetail">
                <h1 style={{textAlign: 'center'}}>{item.name}</h1>
                <p><b>About:</b> {item.description}</p>
                <p><b>Employees:</b> {item.numEmployees}</p>
            </div>
            {companyJobs && companyJobs.map((job) => <JobResult key={job.id} result={job} />)}
        </>
    );
};

export default CompanyDetail;
