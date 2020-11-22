import React from 'react';
import {WeaponsBackground, WeaponsButton, WeaponsContainer, WeaponsParagraph, WeaponsText, WeaponsTitle} from './WeaponsElements';
import Video from "../../../videos/warsaw.mp4";

const Weapons = () => {
    return (
        <WeaponsContainer> 
            <WeaponsBackground autoPlay loop muted src={Video} type='video/mp4'/>
            <WeaponsTitle>
                <WeaponsText>
                    YOU CAN GO TO FRONT!
                </WeaponsText>
                <WeaponsParagraph>
                    Our country needs new batalions to win this war!
                    Form a new one, General, and Big Brother bless you!
                </WeaponsParagraph>
                <WeaponsButton>Take the arms!</WeaponsButton>
            </WeaponsTitle>
        </WeaponsContainer>
    )
}

export default Weapons
