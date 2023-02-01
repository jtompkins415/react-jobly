import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
       <nav className='NavBar'>
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink exact to="/companies">
            Companies
        </NavLink>
        <NavLink exact to="/jobs">
            Jobs
        </NavLink>
       </nav>
    )
}

export default NavBar