import React , {useState, setState, useEffect} from 'react'
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
import { HeroContainer, WeaponGrid, WelcomeBar, HeroButton } from "./components/HeroComponents";
import WeaponFrame from './components/WeaponFrame'

import axios from 'axios';



const Base = () => {

    let[items, setItems] = useState([]);
    const[filterName, setName] = useState("");
    const[filterCount, setCount] = useState("");
    // let[items, setItems] = useState(getAll().filter((weapon) => {return weapon.id <= 3}));

    const [loading, setLoading] = useState(false);
    let [sm, setSm] = useState(3)


    
        useEffect(() => {
            const fetchArms = async () => {
              const res = await axios.get('http://127.0.0.1:5000/arms')
              let newData = res.data.map(
                  (weapon) => {
                        weapon.type = "secret"
                        weapon.serial = weapon._serial_number
                        weapon.count = weapon._count_in_stack
                        weapon.people = weapon._operation_crew_count
                        weapon.country = weapon._country_of_origin
                  }
              )
        
              setItems(res.data);
              console.log(newData)
              setLoading(true);
            }
            fetchArms();
          }, [filterCount]);  
    // useEffect(() => {}, [filterName, filterCount])

    console.log(items)
    if(items.length != 0){
    var test = items.filter(tutorial => tutorial.serial.toLowerCase().includes(filterName))
    items = test;}

    if (filterCount != 0){
    var test2 = items.filter(tutorial => tutorial.people <= filterCount)
    items = test2;
    }

    if (sm != 0){
        var test3 = items.filter(tutorial => tutorial.id <= 3)
        items = test3;
    }

    // function showMore(){
    //     setItems(getAll())
    // }
    console.log(filterName)
    console.log(items)
    return (

            <BaseContainer>
                <SettingsContainer>
                    <SoldiersCount>
                        <p>How many soldiers do you have? </p>
                        <SoldierInput type='number' defaultValue='0' min='0' id="solIn" onChange={event => setCount(event.target.value)}></SoldierInput>
                    </SoldiersCount>
                    <SoldiersCount>
                        <p>Find by name? </p>
                        <SoldierCheckbox type='text'  id="nameOfItem" onChange={event => setName(event.target.value)}></SoldierCheckbox>

                    </SoldiersCount>

                </SettingsContainer>
                <HeroContainer>
                    {loading && <div class="loader"></div>}
                    <WelcomeBar>FORM YOUR BRIGADE</WelcomeBar>
                    <WeaponGrid>
                        {items.map(
                            weapon => (
                                <WeaponFrame id={weapon.id} people={weapon.people} country={weapon.country} serial={weapon.serial} type={weapon.type} count={weapon.count}/>
                            )
                        )}
                    </WeaponGrid>
                    <HeroButton value='0' onClick={event => setSm(event.target.value)}> 
                        Show more
                    </HeroButton>
                </HeroContainer>
            </BaseContainer>

    )
}


export default Base
