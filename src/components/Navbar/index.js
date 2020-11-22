import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ScrollToTop from '../Scroller';
import {Nav, NavbarContainer, NavbarCoat, NavbarLinks, NavbarLink, hover, dehover} from './navbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <NavbarCoat> 
                </NavbarCoat> </Link>
                <NavbarLinks>
                    <Link to="/weapons" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Weapons </NavbarLink></Link>
                    <Link to="/war" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Brigade</NavbarLink> </Link> 
                    <Link to="/" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Enemies</NavbarLink> </Link> 
                    <Link to="/" style={{ textDecoration: 'none' }}> <NavbarLink onMouseOver={hover} onMouseLeave={dehover}> Departaments</NavbarLink> </Link> 
                </NavbarLinks>
            </NavbarContainer> 
        </Nav>
        
    )
}

export default Navbar
