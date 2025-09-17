import React, { useState, useEffect } from 'react';

const ViewProfile = () => {
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

  return (
    <div className="profile-card">
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Hometown:</strong> {profile.hometown}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>
    </div>
  );
};

export default ViewProfile;
