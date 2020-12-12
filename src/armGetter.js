// import React, { useState, useEffect} from "react";
// import axios from 'axios';

// function getAll() {

//     const [veapon, setVeapon] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchMovies = async () => {
//           const res = await axios.get('http://localhost:3000/api/v1/movies/')
//           setVeapon(res.data);
//           console.log('fom nested')
//           setLoading(true);
//         }
//         fetchMovies();
//       }, []);  

//     // return [
//     //     { id: 1, people: 1, country: 'Germany', serial: 'Mein Kampf', type: 'Ideological', count: 10, text: "Bine cuta requesta minfe parterine que sqa portilem"},
//     //     { id: 2, people: 20, country: 'France', serial: 'Tank', type: 'Land', count: 1,  text: "Bine cuta requesta minfe parterine que sqa portilem"},
//     //     { id: 3, people: 200, country: 'Oceania', serial: 'Wunderwaffe', type: 'Secret', count: 1000,  text: "Bine cuta requesta minfe parterine que sqa portilem"},
//     //     { id: 4, people: 200, country: 'Oceania', serial: 'Denys', type: 'Secret', count: 2000,  text: "Bine cuta requesta minfe parterine que sqa portilem"},
//     //     { id: 5, people: 200, country: 'Oceania', serial: 'Viter', type: 'Secret', count: 4000,  text: "Bine cuta requesta minfe parterine que sqa portilem"},
//     //     { id: 6, people: 200, country: 'Oceania', serial: 'Telescreen', type: 'Secret', count: 110000, text: "Bine cuta requesta minfe parterine que sqa portilem"},
//     //     { id: 7, people: 200, country: 'Oceania', serial: 'Stalin', type: 'Secret', count: 2000,  text: "Bine cuta requesta minfe parterine que sqa portilem"}
//     // ];
// };

// export default getAll;

import React,  {useState, useEffect} from 'react'
import axios from 'axios';

const ArmGetter = () => {

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
    return [
      { id: 1, people: 1, country: 'Germany', serial: 'Mein Kampf', type: 'Ideological', count: 10},
      { id: 2, people: 20, country: 'France', serial: 'Tank', type: 'Land', count: 1},
      { id: 3, people: 200, country: 'Oceania', serial: 'Wunderwaffe', type: 'Secret', count: 1000},
      { id: 4, people: 200, country: 'Oceania', serial: 'Denys', type: 'Secret', count: 2000},
      { id: 5, people: 200, country: 'Oceania', serial: 'Viter', type: 'Secret', count: 4000},
      { id: 6, people: 200, country: 'Oceania', serial: 'Telescreen', type: 'Secret', count: 110000},
      { id: 7, people: 200, country: 'Oceania', serial: 'Stalin', type: 'Secret', count: 2000}
  ]

}

export default ArmGetter;
