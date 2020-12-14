import React from 'react'
import { useSelector } from "react-redux";
import { WeaponGrid } from '../Base/components/HeroComponents';
import WeaponFrame from './BrigadeElements';
import {NewP} from './FrameStyles'
import './brigade.css';



const Brigade = () => {
    const counter = useSelector(state => state.counter)
    const storage = useSelector(state => state.storage)
    return (
        <div>

            <NewP>You have taken {counter} soldiers</NewP>
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
