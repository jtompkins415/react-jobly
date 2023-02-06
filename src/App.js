import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useState,useEffect} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from 'jsonwebtoken';
import UserContext from './UserContext';
import JoblyApi from './api';
import NavBar from './routes-navi/NavBar';

import './App.css';
import DemRoutes from './routes-navi/DemRoutes';

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationsIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  

/** Load user info from API. Should not run until a user is logged in and they have a token
 * Re-runs when teh the user logs out.
 * Token is a dependency for this effect
 */


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

  /** Handles site-wide logout  */

   const logout = () => {
    setCurrentUser(null);
    setToken(null);
   }

  /** Handle site-wide login */

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

  /** Handle site-wide sign up 
   * Sets Token upon sign up
  */

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

  /** Check if a job has been applied for */

  const hasApplied = (id) => {
    return applicationsIds.has(id);
  }

  /** Apply to a job
   * Make a call to the api
   * Update set of application IDs
   */

  const applyToJob = (id) => {
    if (hasApplied(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationsIds, id])); 
  }

  if(!infoLoaded) return <div><h1>Loading...</h1></div>

  return (
    <BrowserRouter>
      <UserContext.Provider 
        value={{currentUser, setCurrentUser, hasApplied, applyToJob}}
      >
        <div className='App'>
        <NavBar logout={logout} />
        <DemRoutes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
