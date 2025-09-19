import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SetProfile = ({ setProfileSet, setViewProfile, setProfileUpdated, token }) => {
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
        const fetchUserData = async () => {
            try {
                const userResponse = await fetch('http://localhost:5000/api/users/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const userData = await userResponse.json();
                
                // Fetch additional profile data
                const profileResponse = await fetch('http://localhost:5000/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (profileResponse.ok) {
                    const profileData = await profileResponse.json();
                    setProfile({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        phone: profileData.phone || '',
                        age: profileData.age || '',
                        gender: profileData.gender || '',
                        hometown: profileData.hometown || '',
                        interests: profileData.interests || '',
                    });
                } else {
                    // If no profile exists yet, just populate with user data
                    setProfile({
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        phone: "",
                        age: "",
                        gender: "",
                        hometown: "",
                        interests: "",
                    });
                }
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };
        if (token) {
            fetchUserData();
        }
    }, [token]);

    const SuccessToast = () => {
        toast.dismiss();
        toast.success(
            <div>
                <div style={{ fontSize: '0.9em', marginTop: '4px' }}>
                    Profile Updated Successfully!
                </div>
            </div>,
            {
                position: "top-right",
                autoClose: 2500,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    backgroundColor: "#d1fae5",
                    color: "#065f46",
                    borderRadius: "16px",
                    fontSize: "1rem",
                    fontWeight: "500",
                },
                containerId: "below-header",
            }
        );
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    phone: profile.phone,
                    age: profile.age,
                    gender: profile.gender,
                    hometown: profile.hometown,
                    interests: profile.interests,
                }),
            });
            if (response.ok) {
                SuccessToast();
                setProfileSet(false);
                setViewProfile(true);
                setProfileUpdated(prev => !prev);
            } else {
                console.error('Failed to save profile.');
            }
        } catch (error) {
            console.log('Network error:', error);
        }
    };

    return (
        <div className="container">
            <h2>Personalize Your Profile</h2>
            <form className="setprofile-container" onSubmit={handleSave}>
                <div className="form-grid">
                    <input name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" disabled />
                    <input name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" disabled />
                    <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" disabled />
                    <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone Number" />
                    <input name="age" value={profile.age} onChange={handleChange} placeholder="Age" />
                    <select name="gender" value={profile.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        name="hometown"
                        value={profile.hometown}
                        onChange={handleChange}
                        placeholder="Hometown"
                        className="full-width"
                    />
                    <textarea
                        name="interests"
                        value={profile.interests}
                        onChange={handleChange}
                        placeholder="Your Interests"
                        className="full-width"
                    />
                </div>
                <button type="submit" className="save-btn">Save</button>
            </form>
        </div>
    );
};

export default SetProfile;