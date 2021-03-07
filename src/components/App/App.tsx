import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Profiles from "../ProfileCard/Profiles";
import Header from "./Header/Header";

const App = () => (
  <BrowserRouter basename="/">
    <div className="App">
      <Route path="/profiles" component={Profiles} />
      <Header />
    </div>
  </BrowserRouter>
);

export default App;
