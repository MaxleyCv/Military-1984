import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Base from './Base';
import Brigade from './Brigade';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './Home';
import WeaponSite from './WeaponSite';
import getAll from './armGetter';
  
function App() {
  return (
    <div>
    
    <Router>
      <Navbar />
      <Switch>
      <Route path="/weapons/:id">
          <WeaponSite items={getAll()}/>
      </Route>
        <Route path="/weapons">
          <Base />
          <Footer />
        </Route>
        <Route path="/war">
          <Brigade />
          <Footer />
        </Route>
        <Route path="/">
          <Home />
          <Footer />
        </Route>
      </Switch>
      
    </Router>
    
    </div>
  );
}

export default App;
