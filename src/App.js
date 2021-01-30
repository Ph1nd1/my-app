import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/landing";
import CharityList from "./components/charityList";
import Profile from "./components/profile";
import Causes from "./components/causes";
import CauseProfile from "./components/causeProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Charities" component={CharityList} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Causes" component={Causes} />
        <Route path="/CauseProfile" component={CauseProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
//npm start
