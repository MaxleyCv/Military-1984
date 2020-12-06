import React, { useEffect, useState } from "react";
import getAll from "../../armGetter";
import { HeroContainer, WeaponGrid, WelcomeBar, HeroButton } from "./HeroComponents";
import WeaponFrame from './WeaponFrame'



const Hero = () => {

    const[items, setItems] = useState([getAll()[0], getAll()[1]]);
    function showMore(){
        setItems(getAll())
    }
    function showLess(){
        setItems([getAll()[0], getAll()[1]])
    }
    
    console.log(items)

    return (
        <HeroContainer>
            <WelcomeBar>FORM YOUR BRIGADE</WelcomeBar>
            <WeaponGrid>
                {items.map(
                    weapon => (
                        <WeaponFrame id={weapon.id} people={weapon.people} country={weapon.country} serial={weapon.serial} type={weapon.type} count={weapon.count}/>
                    )
                )}
            </WeaponGrid>
            <HeroButton onClick={showMore}>
                Show more
            </HeroButton>
        </HeroContainer>
    )
}

export default Hero
