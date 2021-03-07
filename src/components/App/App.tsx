import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Profiles from "../ProfileCard/Profiles";

const App = () => (
  <HashRouter basename="/">
    <div className="App">
      <Route path="/profiles" component={Profiles} />
    </div>
  </HashRouter>
);

export default App;
