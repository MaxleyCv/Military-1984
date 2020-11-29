import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import {Frame, WeaponImage, WeaponParameter, ParamName, ParamVal, Buttons, FrameButton, hover, dehover} from './FrameStyles'

const WeaponFrame = (props) => {
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
                <ParamName>We have </ParamName>
                <ParamVal>{props.count} </ParamVal>
            </WeaponParameter>
            <Buttons>
                <Link to={"/weapons/" + props.id}>  
                <FrameButton onMouseOver={hover} onMouseLeave={dehover}>Take</FrameButton>
                </Link>
                <FrameButton onMouseOver={hover} onMouseLeave={dehover}>Details</FrameButton>
            </Buttons>
        </Frame>
    )
}

export default WeaponFrame
