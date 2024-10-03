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
import { UserContext } from "./UserContext";
import { jwtDecode } from "jwt-decode";

function App() {
  const [companies, setCompanies] = useState([]);
  const { jobs, setJobs } = useContext(JobsContext);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

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

  const getUser = () => {
    let user = jwtDecode(token);
    setUser(user);
  }

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      setUser(null);
    }
  }, [token]);

  useEffect(() => {
    getCompanies();
    getJobs();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setToken={setToken}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/companies" element={<SearchPage key="companies" type="companies" results={companies} setResults={getCompanies}/>} />
          <Route path="/companies/:handle" element={<CompanyDetail items={companies} loading={loading}/>} />
          <Route path="/jobs" element={<SearchPage key="jobs" type="jobs" results={jobs} setResults={getJobs}/>} />
          <Route path="/login" element={<LoginPage setToken={setToken}/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
