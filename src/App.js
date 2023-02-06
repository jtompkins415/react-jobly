import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {useContext, useState,useEffect} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from 'jsonwebtoken';
import UserContext from './UserContext';
import JoblyApi from './api';
import NavBar from './NavBar';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserDetails from './UserDetails';

import './App.css';

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationsIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  


  useEffect(function getUserInfo(){
    
    const getCurrUser = async () => {
      if (token){
        try{
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currUser = await JoblyApi.getCurrUser(username);
          setCurrentUser(currUser);
          setApplicationIds(new Set(currentUser.applications));
        }catch(err){
          console.err("App getUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrUser()
  }, [token]);

   const logout = () => {
    setCurrentUser(null);
    setToken(null);
   }

  const login = async (data) => {
    try{
      let res = await JoblyApi.userLogin(data);
      setToken(res);
      return {success: true};
    }catch(err){
      console.error('Login Failed', err);
      return {success: false, err}
    }
  }

  const signup = async (data) => {
    try{
      let res = await JoblyApi.userSignup(data)
      setToken(res);
      return {success: true};
    }catch(err){
      console.error('Signup Failed', err);
      return {success: false, err};
    }
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/companies' element={<CompanyList />} />
          <Route path='/companies/:handle' element={<CompanyDetails />} />
          <Route path='/jobs' element={<JobList />} />
          <Route path='/users/login' element={<LoginForm login={login}/>} />
          <Route path='/users/signup' element={<SignupForm signup={signup} />} />
          <Route path='/users/profile' element= {<UserDetails />} />
        </Routes>
      </BrowserRouter>
      <footer>
      </footer>
    </div>
  );
}

export default App;
