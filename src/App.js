import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import JoblyApi from "./Api";

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);

  const getCompanies = async () => {
    let res = await JoblyApi.getCompanies();
    setCompanies(res);
  }

  const getJobs = async () => {
    let res = await JoblyApi.getJobs();
    setJobs(res);
  }

  useEffect(() => {
    getCompanies();
    getJobs();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<SearchPage results={companies} />} />
          <Route path="/companies/:handle" element={<DetailPage />} />
          <Route path="/jobs" element={<SearchPage results={jobs} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
