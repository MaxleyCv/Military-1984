import React from 'react'
import Footer from '../components/Footer'
import { BaseContainer } from './BaseStyle'
import Hero from './components/Hero'
import Settings from './components/Settings'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import WeaponSite from './WeaponSite'

const Base = () => {
    return (
        <Router>
            <BaseContainer>
                <Switch>
                    <Route path="/weapons/:id" component={WeaponSite}/>
                    <Route path="/weapons">
                        <Settings/>
                        <Hero/>
                    </Route>
                </Switch>
            </BaseContainer>
        </Router>
    )
}

export default Base
