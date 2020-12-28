import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Base from "./Base";
import Brigade from "./Brigade";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import WeaponSite from "./WeaponSite";
import getAll from "./armGetter";
import Checkout from "./checkout";
import Success from "./Success/Success";
import RegisterPage from "./Register";
import LoginPage from "./Login";
import SafeRouter from "./SafeRouter";




function App() {

  return (
    <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <SafeRouter path="/weapons/:id" component={WeaponSite}/>
            <SafeRouter path="/weapons" component={Base}/>
            <SafeRouter path="/checkout/success" component={Success} />
            <SafeRouter path="/checkout" component={Checkout} />
            <SafeRouter path="/war" component={Brigade}/>
            <SafeRouter path="/" component={Home}/>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
