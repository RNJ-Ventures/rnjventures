import React from "react";
import "./ProfileCard.css";
import ProfileCard, { Profile } from "./ProfileCard";

const PROFILES: Profile[] = [
  {
    name: "JonLuca DeCaro",
    bio:
      "JonLuca is a seasoned software engineer and security expert who grew up on a US military base in Italy. After moving to the United States in 2014, JonLuca worked at Pinterest, Google, and Apple in growth focused roles. Most recently, at Pinterest, he directly reported to the VP of growth, and was responsible for growing Pinterest’s MAU by 14M. In his free time, JonLuca enjoys writing and doing growth consulting.",
    picUrl: "/images/jonluca.jpg",
    email: "jonluca@rnjventures.com",
  },
  {
    name: "River Mist",
    bio:
      "River is equal parts software engineer and entrepreneur. After building and selling his first company in 2016, River co-founded Steiner Financial, a real estate firm specializing in automating acquisitions of high yield properties. River most recently joined Pinterest on their growth engineering team. River hails from Northern California, and spent his early childhood living on Native American reservations.",
    picUrl: "/images/river.jpg",
    email: "river@rnjventures.com",
  },
  {
    name: "Nat Redfern",
    bio:
      "Nat is a third generation technologist, and product manager at Disney+ running half a dozen products. Since joining, he’s built products that have delivered $60M in recurring revenue for Disney+. Prior to Disney, Nat worked as the Chief of Staff for Contrary Capital, where he managed a team of 100+ scouts and invested in early stage startups. ",
    picUrl: "/images/nat.jpg",
    email: "nat@rnjventures.com",
  },
];
const Profiles = () => (
  <div className="Profiles">
    {PROFILES.map((profile) => (
      <ProfileCard profile={profile} key={profile.name} />
    ))}
  </div>
);

export default Profiles;
