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
      <div className="ContentContainer">
        <img
          src={process.env.PUBLIC_URL + profile.picUrl}
          className="Image"
          alt={profile.name}
        />
        <div className="TextContainer">
          <h1 className="Name">{profile.name}</h1>
          <p className="Description">{profile.bio}</p>
        </div>
      </div>
      <div className="SpacePanel" />
    </div>
  );
};

export default ProfileCard;
