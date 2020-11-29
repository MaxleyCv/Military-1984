import React from 'react'


import styled from 'styled-components';

export const ItemContainer = styled.div`
    height: 300vh;
    margin-top:0px;
    margin-bottom: 10px;
    position: static;
    width: 100%;
    top: 0;

`


const WeaponSite = (props) => console.log(props) || 
    (
        <ItemContainer>
            <p>props.match.params.id</p> 
        </ItemContainer>
    )


export default WeaponSite
