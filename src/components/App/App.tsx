import React from "react";
import "./App.css";
import Profiles from "../ProfileCard/Profiles";
import Header from "./Header/Header";

const App = () => (
  <div className="App">
    <Header />
    <div className="Body">
      <Profiles />
    </div>
  </div>
);

export default App;
