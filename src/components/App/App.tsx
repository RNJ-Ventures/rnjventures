import React from "react";
import "./App.css";
import Profiles from "../ProfileCard/Profiles";
import Header from "./Header/Header";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";

const App = () => (
  <div className="App">
    <Header />
    <div className="Body">
      <Hero />
      <Profiles />
      <Contact />
    </div>
  </div>
);

export default App;
