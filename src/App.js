import { React, useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import CompanyDetail from './CompanyDetail';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';
import NavBar from './NavBar';
import JoblyApi from "./Api";
import { JobsContext } from './JobsContext';

function App() {
  const [companies, setCompanies] = useState([]);
  const { jobs, setJobs } = useContext(JobsContext);
  const [loading, setLoading] = useState(true);

  const getCompanies = async (handle) => {
    let res = await JoblyApi.getCompanies(handle);
    // console.log(res);
    setCompanies(res);
  }

  const getJobs = async () => {
    let res = await JoblyApi.getJobs();
    // console.log(res);
    setJobs(res);
  }

  useEffect(() => {
    getCompanies();
    getJobs();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<SearchPage key="companies" type="companies" results={companies} setResults={getCompanies}/>} />
          <Route path="/companies/:handle" element={<CompanyDetail items={companies} loading={loading}/>} />
          <Route path="/jobs" element={<SearchPage key="jobs" type="jobs" results={jobs} setResults={getJobs}/>} />
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
