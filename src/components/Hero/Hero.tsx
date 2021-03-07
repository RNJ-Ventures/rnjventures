import React from "react";
import "./Hero.css";

const getRandomEntry = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

const HEROS = [
  "People say nothing is impossible, but I do nothing every day.",
  "You can’t have everything. Where would you put it?",
  "Work until your bank account looks like a phone number.",
  "If you think you are too small to make a difference, try sleeping with a mosquito.",
  "Bad decisions make good stories.",
  "I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.",
  "I didn’t fail the test. I just found 100 ways to do it wrong.",
  "I used to think I was indecisive, but now I’m not so sure.",
  "Don’t worry about the world coming to an end today. It’s already tomorrow in Australia.",
  "Think like a proton. Always positive.",
  "Be happy – it drives people crazy.",
  "Optimist: someone who figures that taking a step backward after taking a step forward is not a disaster, it’s more like a cha-cha.",
  "The question isn’t who is going to let me, it’s who is going to stop me.",
  "You’re only given a little spark of madness. You mustn’t lose it.",
  "If you let your head get too big, it’ll break your neck.",
  "The road to success is dotted with many tempting parking spaces.",
  "Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.",
  "I believe that if life gives you lemons, you should make lemonade… And try to find somebody whose life has given them vodka, and have a party.",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  "A diamond is merely a lump of coal that did well under pressure.",
  "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
  "Age is of no importance unless you’re a cheese.",
  "Happiness is just sadness that hasn’t happened yet.",
  "The best things in life are actually really expensive.",
  "Every tattoo is temporary, because we’re all slowly dying.",
  "It could be that your purpose in life is to serve as a warning to others.",
  "If the world didn’t suck we’d all fly into space.",
  "The light at the end of the tunnel has been turned off due to budget cuts.",
];

export default function Hero() {
  return (
    <div className="Hero">
      <h2>{getRandomEntry(HEROS)}</h2>
      <div className="HeroBackground" />
    </div>
  );
}
