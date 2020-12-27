import React from 'react'
import { useSelector } from "react-redux";
import { WeaponGrid } from '../Base/components/HeroComponents';
import WeaponFrame from './BrigadeElements';
import {NewP} from './FrameStyles'
import './brigade.css';
import styled from 'styled-components';
import {Link  } from "react-router-dom";


const BuyButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
    background: rgba(140, 100, 100, 0.15);
    border: 2px solid rgba(160, 160, 100, 0.3);
    color:  #ffdcbf;
    opacity: 0.6;
    margin-left: 10%;
    margin-bottom: 2rem;
    font-size: 3vh;
    cursor: pointer;
`


const Brigade = () => {
    const counter = useSelector(state => state.counter)
    const storage = useSelector(state => state.storage)
    return (
        <div>
            <NewP>You have taken {counter} soldiers</NewP>
            <Link to={"/checkout"}>
                {counter != 0 ? <BuyButton> Go to war! </BuyButton>: null}
            </Link>
            <WeaponGrid>
                {storage.map(
                    weapon => (
                        <WeaponFrame id={weapon.id} people={weapon.people} country={weapon.country} 
                        serial={weapon.serial} type={weapon.type} 
                        count={weapon.count}></WeaponFrame>
                    )
                )}
            </WeaponGrid>
        </div>
    )
}

export default Brigade
