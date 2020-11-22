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
  
function App() {
  return (
    <div>
    
    <Router>
      <Navbar />
      <Switch>
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
