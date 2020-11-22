import React from 'react'
import Footer from '../components/Footer'
import { BaseContainer } from './BaseStyle'
import Hero from './components/Hero'
import Settings from './components/Settings'

const Base = () => {
    return (
        <BaseContainer>
        <Settings/>
            <Hero/>
        </BaseContainer>
        
    )
}

export default Base
