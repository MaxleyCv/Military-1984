import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 100vh;
`

export const VideoPart = styled.video`
    height: 100vh;
    object-fit: cover;
    width: 100%;
    opacity: 0.2;
    z-index: -10;
    position: absolute;
    top: 0rem;
`

export const WelcomeParagraph = styled.div`
    display: flex;
    position: relative;
    top: 20vh;
    /* color: silver; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WelcomeText = styled.p`
    margin-top: 2rem;
    font-size: 3rem;
    opacity: 0.55;
    margin-bottom: 1.5rem;
`

export const LogoImage = styled.img`
    height: 15rem;
    margin-top: 5rem;
    opacity: 0.4;
    content: url('/images/ingsoc.png');
`

export const WelcomeInfo = styled.p`
    width: 70vw;
    text-align: center;
    font-size: 2rem;
    color: silver;
    opacity: 0.55;
    margin-top: 1rem;
`