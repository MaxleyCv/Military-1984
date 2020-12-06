import React from 'react';
import {ItemImage ,WeaponParameter, ParamVal, ParamName, ItemFrame, ItemOrigin} from './ItemStyles'


import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export const ItemContainer = styled.div`
    margin-top:3rem;
    margin-bottom: 10px;
    position: absolute;
    width: 100%;
    height: 200vh;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`



const WeaponSite = (props) => {
    let {id} = useParams();
    return (
        <ItemContainer>
            <ItemFrame>
                <ItemOrigin>
                    {/* <ItemImage /> */}
                    <WeaponParameter>
                        <ParamVal>{props.items[id].text} </ParamVal>
                    </WeaponParameter>
                </ItemOrigin>
                <WeaponParameter>
                    <ParamName>From: </ParamName>
                    <ParamVal>{props.items[id].country} </ParamVal>
                </WeaponParameter>
                <WeaponParameter>
                    <ParamName>You will need: </ParamName>
                    <ParamVal>{props.items[id].people} </ParamVal>
                    <ParamName> people </ParamName>
                </WeaponParameter>
                <WeaponParameter>
                    <ParamName>Serial number: </ParamName>
                    <ParamVal>{props.items[id].serial} </ParamVal>
                </WeaponParameter>
                <WeaponParameter>
                    <ParamName>Weapon class: </ParamName>
                    <ParamVal>{props.items[id].type} </ParamVal>
                </WeaponParameter>
                <WeaponParameter>
                    <ParamName>We have </ParamName>
                    <ParamVal>{props.items[id].count} </ParamVal>
                </WeaponParameter>
            </ItemFrame>
        </ItemContainer>
    )
    }

export default WeaponSite
