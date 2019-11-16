import React from "react";
import {Switch, Route} from 'react-router-dom'

import "./App.css";

import HomePage from "./Pages/homepage/homepage.component";

const LidsPage = () => (
  <div>
    <h1>Lids Page</h1>
  </div>
)

function App() {
  return(
  <div>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/Lids' component={LidsPage} />
    </Switch>
  </div>
  )}

export default App;
