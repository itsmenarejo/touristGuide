import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const SetProfile = ({setProfileSet, setViewProfile}) => {

    const [profile, setProfile] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        age:"",
        gender:"",
        hometown:"",
        interests:""
    });

    useEffect(() => {
        const storedProfile = localStorage.getItem("userProfile");
        if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
        }
    }, []);

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

     const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem("userProfile", JSON.stringify(profile));
        /*alert("Profile saved locally!");*/
        SuccessToast();
        setProfileSet(false);
        setViewProfile(true);
    };

    return (
        <div className="container">
            <h2>Personalize Your Profile</h2>
            <form className="setprofile-container" onSubmit={handleSave}>
                <div className="form-grid">
                    <input name="firstName" value={profile.firstName} onChange={handleChange} placeholder="First Name" />
                    <input name="lastName" value={profile.lastName} onChange={handleChange} placeholder="Last Name" />

                    <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" />
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
                        value={profile.hometown} onChange={handleChange}
                        placeholder="Hometown"
                        className="full-width"
                    />
                    <textarea
                        name="interests"
                        value={profile.interests} onChange={handleChange}
                        placeholder="Your Interests"
                        className="full-width"
                    />
                </div>
                <button type="submit" className="save-btn">Save</button>
            </form>
        </div>
    )
}

export default SetProfile;
