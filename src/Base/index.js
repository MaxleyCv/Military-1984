import React , {useState, setState} from 'react'
import Footer from '../components/Footer'
import { BaseContainer } from './BaseStyle'
import Hero from './components/Hero.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import WeaponSite from '../WeaponSite'
import getAll from '../armGetter'
import {SettingsContainer, SoldiersCount, SoldierCheckbox, SoldierInput} from './components/Settings/SettingsComponents'







const Base = () => {

    const[items, setItems] = useState(getAll);
    return (

            <BaseContainer>
                <SettingsContainer>
                    <SoldiersCount>
                        <p>How many soldiers do you have? </p>
                        <SoldierInput type='number' defaultValue='0' min='0' id="solIn" ></SoldierInput>
                    </SoldiersCount>
                    <SoldiersCount>
                        <p>Should we sort by people? </p>
                        <SoldierCheckbox type='text'  id="nameOfItem"></SoldierCheckbox>
                    </SoldiersCount>
                </SettingsContainer>
                <Hero items={getAll()}/>
            </BaseContainer>

    )
}


export default Base
