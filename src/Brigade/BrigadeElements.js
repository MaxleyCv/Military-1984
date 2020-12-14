import React, { forwardRef } from 'react';
import {useDispatch} from 'react-redux';
import {Frame, WeaponImage, WeaponParameter, ParamName, ParamVal, Buttons, FrameButton, hover, dehover} from './FrameStyles'
import {add } from '../actions/SoldierCounter'
import {del } from '../actions/StoreIds'


const WeaponFrame = (props) => {
    const dispatch = useDispatch();
    return (
        <Frame class="weapon" id={props.id}>
            <WeaponImage src="../../../images/coatOfArms.png"/>
            <WeaponParameter>
                <ParamName>Weapon id: </ParamName>
                <ParamVal>{props.id} </ParamVal>
            </WeaponParameter>
            <WeaponParameter>
                <ParamName>From: </ParamName>
                <ParamVal>{props.country} </ParamVal>
            </WeaponParameter>
            <WeaponParameter>
                <ParamName>You will need: </ParamName>
                <ParamVal>{props.people} </ParamVal>
                <ParamName> people </ParamName>
            </WeaponParameter>
            <WeaponParameter>
                <ParamName>Serial number: </ParamName>
                <ParamVal>{props.serial} </ParamVal>
            </WeaponParameter>
            <WeaponParameter>
                <ParamName>Weapon class: </ParamName>
                <ParamVal>{props.type} </ParamVal>
            </WeaponParameter>
            <WeaponParameter>
                <ParamName>You have </ParamName>
                <ParamVal>{props.count} </ParamVal>
            </WeaponParameter>
            <Buttons>
                <FrameButton onMouseOver={hover} onMouseLeave={dehover} onClick={() => {
                                        dispatch(add({
                                            id: props.id,
                                            count: 1,
                                            people: props.people,
                                            type: props.type,
                                            serial: props.serial,
                                            country: props.country
                                        }))
                }}>+</FrameButton>
                <FrameButton onMouseOver={hover} onMouseLeave={dehover} onClick={() => {
                                        dispatch(del({
                                            id: props.id,
                                            count: 1,
                                            people: props.people,
                                            type: props.type,
                                            serial: props.serial,
                                            country: props.country
                                        }))}}>-</FrameButton>
            </Buttons>
        </Frame>
    )
}

export default WeaponFrame
