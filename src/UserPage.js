import React, { useState, useEffect } from 'react';
import menu from './images/menu.png';
import './UserPage.css';
import UserDashBoard from './UserDashBoard';
import SetProfile from './SetProfile';
import ViewProfile from './ViewProfile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserPage = () => {
  const [isProfileSet, setIsProfileSet] = useState(false);
  const [ProfileSet, setProfileSet] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  const showWelcomeToast = () => {
    toast.dismiss();
    toast.info(
      <div>
        <strong>Welcome User!</strong>
        <div style={{ fontSize: '0.8em', marginTop: '4px' }}>
          Explore Tamil Nadu’s rich heritage right here!
        </div>
      </div>,
      {
        position: "bottom-left",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: false,
        style: {
            backgroundColor: "#0d47a1",
            color: "#ebf4fe",
            borderRadius: "10px",
            fontSize: "0.95rem",
            fontWeight: "500",
        },
      }
    );
  };

  const handleDashboardClick = () => {
    setDashboardOpen(true);
    setProfileSet(false);
    setViewProfile(false);
    setIsNavOpen(false);
    showWelcomeToast();
  };

  const handleSetProfileClick = () => {
    setIsProfileSet(true);
    setProfileSet(true);
    setDashboardOpen(false);
    setViewProfile(false);
    setIsNavOpen(false);
  };

  useEffect(() => {
    showWelcomeToast();
  }, []);

  const handleViewProfileClick = () => {
    setViewProfile(true);
    setDashboardOpen(false);
    setProfileSet(false);
    setIsNavOpen(false);
  };

  return (
    <div className="userpage">
      <button className="menu" onClick={() => setIsNavOpen(!isNavOpen)}>
        <img src={menu} alt="hamburger-menu" />
      </button>

      {isNavOpen && <div className="backdrop" onClick={() => setIsNavOpen(false)}></div>}

      <div className={`nav-board ${isNavOpen ? 'open' : ''}`}>
        <ul className="items">
          <li><button className="item-btn" onClick={handleDashboardClick}>Dashboard</button></li>
          {!isProfileSet ? (
            <li><button className="item-btn" onClick={handleSetProfileClick}>Set Your Profile</button></li>
          ) : (
            <li><button className="item-btn" onClick={handleViewProfileClick}>View Profile</button></li>
          )}
          <li><button className="item-btn">AI Assistant</button></li>
          <li><button className="item-btn">Nearby Places</button></li>
          <li><button className="item-btn">Wish List</button></li>
        </ul>
      </div>

      <div className="user-page-main">
        {ProfileSet && <SetProfile setProfileSet={setProfileSet} setViewProfile={setViewProfile} />}
        {dashboardOpen && <UserDashBoard />}
        {viewProfile && <ViewProfile />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserPage;
