import React from 'react'
import '../App.css';
import Footer from '../components/Footer';
import Enemies from '../components/Body/Enemies';
import News from '../components/Body/News';
import Weapons from '../components/Body/Weapons';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Header />
            <News />
            <Weapons />
            <Enemies />
        </div>
    )
}

export default Home
