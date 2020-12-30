import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/landing";
import CharityList from "./components/charityList";
import Profile from "./components/profile";

// import './App.css';, { Component }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Charities" component={CharityList} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
//npm start
