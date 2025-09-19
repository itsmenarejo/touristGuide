import React, { useState, useEffect } from 'react';

const ViewProfile = ({setProfileSet, setViewProfile,profileUpdated, token}) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
            console.error('Failed to fetch profile');
        }
      } catch (error) {
          console.error('Network error:', error);
      } finally {
          setLoading(false);
      }
    };
    fetchProfile();
  }, [token, profileUpdated]);

  const handleEditClick = () => {
    setProfileSet(true);
    setViewProfile(false);
  };

  if (loading) {
    return <div className='profile-card'>Loading profile...</div>;
  }
  if(!profile){
    return <div className='profile-card'>No profile data available.</div>;
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
      <p><strong>Name:</strong> {profile.user.firstName} {profile.user.lastName}</p>
      <p><strong>Email:</strong> {profile.user.email}</p>
      <p><strong>Phone:</strong> {profile.phone || 'N/A'}</p>
      <p><strong>Age:</strong> {profile.age || 'N/A'}</p>
      <p><strong>Gender:</strong> {profile.gender || 'N/A'}</p>
      <p><strong>Hometown:</strong> {profile.hometown || 'N/A'}</p>
      <p><strong>Interests:</strong> {profile.interests || 'N/A'}</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default ViewProfile;
