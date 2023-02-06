import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails'
import JobList from '../jobs/JobList';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import PrivateRoute from './PrivateRoute';
import UserDetails from '../UserDetails';


const DemRoutes = ({login, signup}) => {
    return(
        
        <Routes>

          <Route path='/' element={<Home />} /> 
          <Route path='/users/login' element={<LoginForm login={login}/>} />
          <Route path='/users/signup' element={<SignupForm signup={signup} />} />
    
          <PrivateRoute exact path='/companies'>
            <CompanyList />
          </PrivateRoute>

          <PrivateRoute exact path='/jobs'>
            <JobList />
          </PrivateRoute>

          <PrivateRoute exact path='/companies/:handle'>
            <CompanyDetails />
          </PrivateRoute>

          <PrivateRoute exact path='/users/profile'>
            <UserDetails />          
          </PrivateRoute>

          

        </Routes>
     
    )
}

export default DemRoutes;








