import React from "react";
import "./ProfileCard.css";

export interface Profile {
  name: string;
  bio: string;
  email: string;
  picUrl: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { profile } = props;
  return (
    <div className="Profile">
      <img
        src={process.env.PUBLIC_URL + profile.picUrl}
        className="Image"
        alt={profile.name}
      />
      <div className="ContentContainer">
        <h1 className="Name">{profile.name}</h1>
        <p className="Description">{profile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
