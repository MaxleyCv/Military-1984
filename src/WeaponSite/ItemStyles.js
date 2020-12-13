import styled from 'styled-components';


export const ItemText = styled.div`
    width: 30vw;
`

export const ItemFrame = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10rem;
    height: fit-content;
    align-items: center;
`

export const ItemOrigin = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const ItemImage = styled.div`
    width: 40vw;
    height: 40vh;
    margin-bottom: 1rem;
    background: url("../images/coatOfArms.png");
    background-repeat: no-repeat;
`

export const WeaponParameter = styled.div`
    display: flex;
    font-size: 3vh;
    color: silver;
    margin-bottom: 0.4rem;
    width: 30vw;
`

export const ParamName = styled.p`
    opacity: 0.4;
    padding-right: 10px;
`

export const ParamVal = styled.p`
    opacity: 0.7;
    padding-right: 10px;
`

