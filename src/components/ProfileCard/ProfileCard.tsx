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
      <p className="Name">{profile.name}</p>
      <p className="Description">{profile.bio}</p>
    </div>
  );
};

export default ProfileCard;
