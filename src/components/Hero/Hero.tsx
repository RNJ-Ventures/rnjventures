import React from "react";
import "./Hero.css";

const getRandomEntry = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};

const HEROS = [
  "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
  "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
  "I always wanted to be somebody, but now I realise I should have been more specific.",
  "I am so clever that sometimes I don’t understand a single word of what I am saying.",
  "People say nothing is impossible, but I do nothing every day.",
  "Life is like a sewer… what you get out of it depends on what you put into it.",
  "You can’t have everything. Where would you put it?",
  "Work until your bank account looks like a phone number.",
  "Change is not a four letter word… but often your reaction to it is!",
  "If you think you are too small to make a difference, try sleeping with a mosquito.",
  "Bad decisions make good stories.",
  "I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.",
  "When life gives you lemons, squirt someone in the eye.",
  "A clear conscience is a sure sign of a bad memory.",
  "Well-behaved women seldom make history.",
  "I didn’t fail the test. I just found 100 ways to do it wrong.",
  "I used to think I was indecisive, but now I’m not so sure.",
  "Don’t worry about the world coming to an end today. It’s already tomorrow in Australia.",
  "Think like a proton. Always positive.",
  "Be happy – it drives people crazy.",
  "Optimist: someone who figures that taking a step backward after taking a step forward is not a disaster, it’s more like a cha-cha.",
  "The question isn’t who is going to let me, it’s who is going to stop me.",
  "You’re only given a little spark of madness. You mustn’t lose it.",
  "I am an early bird and a night owl… so I am wise and I have worms",
  "If you let your head get too big, it’ll break your neck.",
  "The road to success is dotted with many tempting parking spaces.",
  "Leadership is the art of getting someone else to do something you want done because he wants to do it.",
  "Live each day like it’s your second to the last. That way you can fall asleep at night.",
  "Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.",
  "Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.",
  "I believe that if life gives you lemons, you should make lemonade… And try to find somebody whose life has given them vodka, and have a party.",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  "A diamond is merely a lump of coal that did well under pressure.",
  "Nothing is impossible, the word itself says I’m possible!",
  "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
  "Women who seek to be equal with men lack ambition.",
  "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
  "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
  "Age is of no importance unless you’re a cheese.",
  "When tempted to fight fire with fire, remember that the Fire Department usually uses water.",
  "Trying is the first step toward failure.",
  "Happiness is just sadness that hasn’t happened yet.",
  "The best things in life are actually really expensive.",
  "Every tattoo is temporary, because we’re all slowly dying.",
  "A few harmless flakes working together can unleash an avalanche of destruction.",
  "Dreams are like rainbows. Only idiots chase them.",
  "It could be that your purpose in life is to serve as a warning to others.",
  "If the world didn’t suck we’d all fly into space.",
  "The light at the end of the tunnel has been turned off due to budget cuts.",
  "Always remember that you are unique – just like everybody else.",
];

export default function Hero() {
  return (
    <div className="Hero">
      <h2>{getRandomEntry(HEROS)}</h2>
      <div className="HeroBackground" />
    </div>
  );
}
