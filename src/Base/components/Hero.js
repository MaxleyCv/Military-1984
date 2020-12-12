import React, { useEffect, useState } from "react";
import getAll from "../../armGetter";
import { HeroContainer, WeaponGrid, WelcomeBar, HeroButton } from "./HeroComponents";
import WeaponFrame from './WeaponFrame'

// function a(){
// const [veapon, setVeapon] = useState([]);
// const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchMovies = async () => {
//           const res = await axios.get('http://127.0.0.1:5000/arms')
//           setVeapon(res.data);
//           console.log('fom nested')
//           setLoading(true);
//         }
//         fetchMovies();
//       }, []);  
//     }

const Hero = (props) => {



    const[items, setItems] = useState(props.items);
    // function showMore(){
    //     setItems(props.items)
    //     if (props.filterName){
    //         setItems(items.filter((weapon) => {return weapon.serial === props.filterName}))
    //     }
    
    //     if (props.filterCount){
    //         setItems(items.filter((weapon) => {return weapon.count <= props.filterCount}))
    //     }
    // }

    // function filterBySerial(serial){
    //     setItems(getAll().filter((weapon) => {return weapon.serial == serial}))
    // }

    // function showLess(){
    //     setItems([props.items[0], props.items[1]])
    // }
    
    // if (props.filterName){
    //     setItems(items.filter((weapon) => {return weapon.serial === props.filterName}))
    // }

    // if (props.filterCount){
    //     setItems(items.filter((weapon) => {return weapon.count <= props.filterCount}))
    // }
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
            {/* <HeroButton onClick={showMore}> 
                Show more
            </HeroButton> */}
        </HeroContainer>
    )
}

export default Hero
