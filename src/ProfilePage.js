import {React, useState, useContext} from "react";
import JoblyApi from "./Api";
import { useNavigate } from "react-router-dom";
import './ProfilePage.css';
import {UserContext} from "./UserContext";

const ProfilePage = () => {
    const { user, refreshUser } = useContext(UserContext);
    const initialFormState = {
        password: "password",
        firstName: "test",
        lastName: "user",
        email: "test@me.com"
    };
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
        await JoblyApi.updateUser(user.username, formData);
        refreshUser();
        navigate("/");
    }

    return (
        <>
        <h3 className="mb-3">Update your profile</h3>
        <form className="profilepage-form" onSubmit={handleSubmit}>
            <div className="form-group row mb-3">
                <label htmlFor="firstName" className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-8"><input
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                /></div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="lastName" className="col-sm-3 col-form-label">Last Name</label>
                <div className="col-sm-8"><input
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                /></div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-8"><input
                    className="form-control"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                /></div>
            </div>
            <p>Enter your current password:</p>
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
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </>
    );
};

export default ProfilePage;
