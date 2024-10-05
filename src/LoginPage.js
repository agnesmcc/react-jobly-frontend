import {React, useState} from "react";
import JoblyApi from "./Api";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = ({setToken}) => {
    const initialFormState = {username: "testuser", password: "password"};
    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await JoblyApi.login(formData);
        setToken(token);
        navigate("/");
    }

    return (
        <>
        <h3 className="mb-3">Hello again...</h3>
        <form className="loginpage-form" onSubmit={handleSubmit}>
            <div className="form-group row mb-3">
                <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
                <div className="col-sm-8"><input
                    className="form-control"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                /></div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-8"><input
                    className="form-control"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                /></div>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </>
    );
};

export default LoginPage;
