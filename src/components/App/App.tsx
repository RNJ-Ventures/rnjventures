import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Profiles from "../ProfileCard/Profiles";

const App = () => (
  <BrowserRouter basename="/">
    <div className="App">
      <Route path="/profiles" component={Profiles} />
    </div>
  </BrowserRouter>
);

export default App;
