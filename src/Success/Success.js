import React from 'react'
import styled from 'styled-components'


const MainText = styled.p`
    font-size: 6rem;
    color: silver;
    opacity: 0.6;
    margin-top: 15rem;
    margin-bottom: 16rem;
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Success = () => {
    return (
        <MainDiv>
            <MainText> You are awaited at London </MainText>
        </MainDiv>
    )
}

export default Success;
