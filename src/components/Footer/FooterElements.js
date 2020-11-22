import styled from 'styled-components';

export const FooterContainer = styled.div`
    margin-top: 0;
    width: 100%;
    height: 30vh;
`

export const FooterNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`

export const FooterLogo = styled.img`
    height: 10rem;
    width: 10rem;
    opacity: 0.4;
    border: transparent;
`
export const FooterLink = styled.a`
    font-size: 2.5rem;
    color: silver;
    opacity: 0.7;
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 20rem;
    cursor: pointer;
`

export const Ministries = styled.div`
    display: flex;
    flex-direction: column;
`

export const MinistryName = styled.span`
    margin-left: 1rem;
`

export const Name = styled.p`
    font-size: 2rem;
`

export function hover(element){
    element.target.style.opacity = 1;
}

export function dehover(element){
    element.target.style.opacity = 0.7;
}