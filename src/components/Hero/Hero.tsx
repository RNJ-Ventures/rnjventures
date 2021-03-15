import React from "react";
import "./Hero.css";
import DotCircle from "./DotCircle";

export default function Hero() {
  return (
    <div className="Hero">
      <h1>
        Building the future of tech by accelerating the growth of SaaS companies
      </h1>
      <img
        className="BottomLeft"
        src={`${process.env.PUBLIC_URL}/images/rnj_icon_logo.svg`}
        alt="rnj ventures logo"
      />
      <img
        className="BottomRight"
        src={`${process.env.PUBLIC_URL}/images/rnj_icon_logo.svg`}
        alt="rnj ventures logo"
      />
      <div className="DotWrapper">
        <DotCircle width={17} height={17} space={26} radius={6} fill="#000" />
      </div>
    </div>
  );
}
