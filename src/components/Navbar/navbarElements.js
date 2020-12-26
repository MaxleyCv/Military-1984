
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Nav = styled.div`
    background: #000000;
    height: 8.5rem;
    top: 0px;
    padding: 0, 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    position: fixed;
    align-items: center;
    z-index: 10;
`

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    justify-content: space-between;
`

export const NavbarCoat = styled.img`
    content: url('../../images/coatOfArms.png');
    height: 5rem;
    padding-right: 100px;
    margin-left: 5rem;
    cursor: pointer;
`
export const NavbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 45%;
    margin-right: 5rem;
`

export const NavbarLink = styled.span` 
    font-size: 1.6rem;
    color: silver;
    opacity: 0.4;
    cursor: pointer;
`
export function hover(element){
    element.target.style.opacity = 1;
}

export function dehover(element){
    element.target.style.opacity = 0.4;
}