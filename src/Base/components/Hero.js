import React, { useState } from "react";
import { HeroContainer, WeaponGrid, WelcomeBar } from "./HeroComponents";
import Settings from "./Settings";
import WeaponFrame from './WeaponFrame'


const Hero = () => {

    const[weapons] = useState([
        { id: 1, people: 1, country: 'Germany', serial: 'Mein Kampf', type: 'Ideological', count: 10},
        { id: 2, people: 20, country: 'France', serial: 'Tank', type: 'Land', count: 1},
        { id: 3, people: 200, country: 'Oceania', serial: 'Wunderwaffe', type: 'Secret', count: 1000},
        { id: 4, people: 200, country: 'Oceania', serial: 'Denys', type: 'Secret', count: 2000},
        { id: 5, people: 200, country: 'Oceania', serial: 'Viter', type: 'Secret', count: 4000},
        { id: 6, people: 200, country: 'Oceania', serial: 'Telescreen', type: 'Secret', count: 110000},
        { id: 7, people: 200, country: 'Oceania', serial: 'Stalin', type: 'Secret', count: 2000}
    ]);
    return (
        <HeroContainer>
            <WelcomeBar>FORM YOUR BRIGADE</WelcomeBar>
            <WeaponGrid>
                {weapons.map(
                    weapon => (
                        <WeaponFrame id={weapon.id} people={weapon.people} country={weapon.country} serial={weapon.serial} type={weapon.type} count={weapon.count}/>
                    )
                )}
            </WeaponGrid>
        </HeroContainer>
    )
}

export default Hero
