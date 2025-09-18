import React, { useState, useEffect } from 'react';

const ViewProfile = ({setProfileSet, setViewProfile}) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    hometown: "",
    interests: ""
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleEditClick = () => {
    setProfileSet(true);
    setViewProfile(false);
  }

  return (
    <div className="profile-card">
      <h2>My Profile</h2>
      {/*<img
        src="/profile-avatar.png"
        alt="avatar"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "3px solid #0056b3",
          display: "block",
          margin: "0 auto 1rem"
        }}
      />*/}
      <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Hometown:</strong> {profile.hometown}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default ViewProfile;
