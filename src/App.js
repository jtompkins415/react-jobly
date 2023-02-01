import {Route, Routes, BrowserRouter} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserDetails from './UserDetails';

import './App.css';

function App() {
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
          <Route path='/users/login' element={<LoginForm />} />
          <Route path='/users/signup' element={<SignupForm />} />
          <Route path='/users/profile' element= {<UserDetails />} />
        </Routes>
      </BrowserRouter>
      <footer>
      </footer>
    </div>
  );
}

export default App;
