import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <text>RNJ Ventures</text>
      <div className="NavMenu">
        <a href="#mission">Mission</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
