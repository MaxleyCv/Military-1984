import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ScrollToTop from '../Scroller';
import {Nav, NavbarContainer, NavbarCoat, NavbarLinks, NavbarLink, hover, dehover} from './navbarElements';

function logout() {
    console.log(localStorage.getItem('isLogged'));
    // localStorage.setItem("isLogged", false);
    console.log(localStorage.getItem('isLogged'))
}

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <Link to="/" style={{ textDecoration: 'none' }}> <NavbarCoat/> </Link>
                <NavbarLinks>
                    <Link to="/weapons" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Weapons </NavbarLink></Link>
                    <Link to="/war" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Brigade</NavbarLink> </Link> 
                    <Link to="/register" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Register</NavbarLink> </Link> 
                    <Link to="/login" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover} onClick={logout()}> Log out</NavbarLink> </Link> 
                </NavbarLinks>
            </NavbarContainer> 
        </Nav>
        
    )
}

export default Navbar
