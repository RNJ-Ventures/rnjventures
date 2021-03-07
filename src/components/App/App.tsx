import React from "react";
import "./App.css";
import Profiles from "../ProfileCard/Profiles";
import Header from "./Header/Header";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Mission from "../Mission/Mission";

const App = () => (
  <div className="App">
    <Header />
    <div className="Body">
      <Hero />
      <Mission />
      <Profiles />
      <Contact />
    </div>
  </div>
);

export default App;
