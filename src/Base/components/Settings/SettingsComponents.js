import styled from 'styled-components';

export const SettingsContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    margin-bottom: 10vh;
    justify-content: space-evenly;
    position: sticky;
    top:8.5rem;
    background: rgb(5, 0, 0);
    z-index: 9;
    padding-bottom: 0.7rem;
    padding-top: 0.7rem;
    border: 1px solid rgba(255, 200, 200, 0.05);
`

export const SoldiersCount = styled.div`
    font-size: 1.5rem;
    display: flex;
    opacity: 0.3;
`

export const SoldierInput = styled.input`
    background: rgba(0, 0, 0, 0.1);
    color: rgba(255, 200, 200, 1);
    opacity: 0.6;
    font-size: 1.5rem;
    border-bottom: 1 px solid yellow;
    border: none;
    width: 5rem;
    text-align: center;

`

export const SoldierCheckbox = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.4;
    margin-left: 1rem;
`
