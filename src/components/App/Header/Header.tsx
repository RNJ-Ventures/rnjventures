import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <img
          src={`${process.env.PUBLIC_URL}/images/rnj_logo.svg`}
          alt="rnj ventures"
        />
      </div>
      <div className="NavMenu">
        <a href="#mission">Mission</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
