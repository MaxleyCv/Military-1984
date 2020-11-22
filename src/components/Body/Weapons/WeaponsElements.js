import styled from 'styled-components';


export const WeaponsContainer = styled.div`
    margin-top: 0;
    width: 100%;
    height: 110vh;
`

export const WeaponsBackground = styled.video`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 110vh;
    opacity: 0.2;
    z-index: -10;
    display: inline;
`

export const WeaponsTitle = styled.div`
    text-align: center;
    display: flex;
    position: relative;
    top: 50vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -5;
`

export const WeaponsParagraph = styled.p`
    margin-top: 2rem;
    font-size: 2rem;
    color: silver;
    opacity: 0.7;
    width: 50vw;
`

export const WeaponsText = styled.p`
    font-size: 3rem;
    opacity: 0.55;
    margin-bottom: 1.5rem;
`

export const WeaponsButton = styled.button`
    font-size: 2rem;
    margin-top: 5rem;
    background-color:  rgba(255, 255, 255, 0.2);
    color: wheat;
    opacity: 0.85;
    border: 2px solid rgba(255, 255, 255, 0.3);
    width: 20rem;
    height: 5rem;
`