import React from "react";
const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;
  return (
    <div>
      {props.children}
      <h3>Nom Complet</h3>
      <p>{fullName}</p>
      <h3>Bio</h3>
      <p>{bio}</p>
      <h3>Profession</h3>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Voir le nom</button>
    </div>
  );
};

export default Profile;
