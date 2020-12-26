import styled from 'styled-components';

export const MainSection = styled.div`
    position: absolute;
    top: 8rem;
    margin-top: 10rem;
`

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 100vw;
    align-items: center;
    justify-content: space-around;
`

export const InputField = styled.div`
    display: flex;
    width: 50vw;
    justify-content: space-evenly;
`

export const TextInput = styled.input`
    background-color: rgba(0,0,0,0);
    font-size: 2rem;
    margin-bottom: 1rem;
    color: gold;
    opacity: 0.5;
    border: 1 px solid silver;
    width: 20vw;
`

export const SubmitButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
    background: rgba(140, 100, 100, 0.15);
    border: 2px solid rgba(160, 160, 100, 0.3);
    color:  #ffdcbf;
    opacity: 0.6;
    font-size: 3vh;
    cursor: pointer;
`

export const ErrMessage = styled.div`
    color: wheat;
`