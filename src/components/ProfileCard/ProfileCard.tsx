import React from "react";
import "./ProfileCard.css";

export interface Profile {
  firstName: string;
  lastName: string;
  bio: string;
  email: string;
  picUrl: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { profile } = props;
  const { bio, firstName, lastName, picUrl } = profile;
  const name = firstName + lastName;
  return (
    <div className="Profile">
      <div className="ContentContainer">
        <img
          src={process.env.PUBLIC_URL + picUrl}
          className="Image"
          alt={name}
        />
        <div className="TextContainer">
          <h1 className="Name">
            <span>{firstName}</span> <span>{lastName}</span>
          </h1>
          <p className="Description">{bio}</p>
        </div>
      </div>
      <div className="SpacePanel" />
    </div>
  );
};

export default ProfileCard;
