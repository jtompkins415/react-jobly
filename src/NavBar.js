import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


const NavBar = () => {
    return (
       <Navbar>
        <Nav>
            <NavItem>
                <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/companies'>Companies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/jobs'>Jobs</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/users/signup'>Sign Up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/users/login'>Login</NavLink>
            </NavItem>
            
        </Nav>
       </Navbar>
    )
}

export default NavBar