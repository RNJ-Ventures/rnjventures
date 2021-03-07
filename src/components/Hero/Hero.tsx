import React from "react";
import HeroBackgroundGrid from "./HeroBackgroundGrid";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <h2>We are a bunch of software fucks</h2>
      <div className="HeroBackground">
        <HeroBackgroundGrid
          width={30}
          height={40}
          space={30}
          radius={3}
          fill="#fff"
        />
      </div>
    </div>
  );
}
