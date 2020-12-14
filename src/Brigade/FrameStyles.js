import styled from 'styled-components';

export const Frame = styled.div`
    height: fit-content;
    width: 25vw;
    border: 2px solid rgba(140, 128, 128, 0.3);
    display: flex; 
    flex-direction: column;
    align-items: center;
    font-size: 1vh;
    margin-bottom: 2rem;
`
export const WeaponImage = styled.img`
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 10vw;
    height: 10vh;
`

export const WeaponParameter = styled.div`
    display: flex;
    font-size: 3vh;
    color: silver;
    margin-bottom: 0.4rem;
`

export const ParamName = styled.p`
    opacity: 0.4;
    padding-right: 10px;
`

export const ParamVal = styled.p`
    opacity: 0.7;
    padding-right: 10px;
`

export const Buttons = styled.div`
    display: flex;
    width: 20vw;
    margin-bottom: 2rem;
    margin-top: 2vh;
    justify-content: space-around;
`

export const FrameButton = styled.button`
    width: 9vw;
    height: 3vw;
    background: rgba(140, 100, 100, 0.15);
    border: 2px solid rgba(160, 160, 100, 0.3);
    color:  #ffdcbf;
    opacity: 0.6;
    font-size: 3vh;
    cursor: pointer;

`

export const NewP = styled.p`
    margin-top:10rem;
    font-size: 2rem;
    opacity: 0.4;
    margin-left: 3vw;
    margin-bottom: 2rem;
`


export function hover(element){
    element.target.style.opacity = 0.9;
}

export function dehover(element){
    element.target.style.opacity = 0.6;
}

