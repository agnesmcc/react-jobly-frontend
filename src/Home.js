import {React, useContext} from "react";
import './Home.css';
import { UserContext } from "./UserContext";

const Home = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="home">
            <h1>Jobly</h1>
            <p>Look for a job. Get a job.</p>
            { user &&
            <p>Welcome back, {user.username}!</p>}
        </div>
    );
};

export default Home;
