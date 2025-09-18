import React, { useState, useEffect } from 'react';
import menu from '../images/menu.png';
import './UserPage.css';
import UserDashBoard from './UserDashBoard';
import SetProfile from './Profile/SetProfile';
import ViewProfile from './Profile/ViewProfile';
import { toast } from 'react-toastify';
import logoutIcon from '../images/user-logout.png';

const UserPage = ({ justLoggedIn, setJustLoggedIn, setIsUserLogged }) => {
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

  /*const logInSuccessToast = () => {
      toast.dismiss();
      toast.success(
        <div>
          <div style={{ fontSize: '0.9em', marginTop: '4px' }}>
              Logged In Successfully!
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
  };*/

  const logOutSuccessToast = () => {
      toast.dismiss();
      toast.success(
        <div>
          <div style={{ fontSize: '0.9em', marginTop: '4px' }}>
              Logged Out Successfully!
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
    if (justLoggedIn) {
      /*logInSuccessToast();*/
      setJustLoggedIn(false);
    }
    showWelcomeToast();
  }, []);

  const handleViewProfileClick = () => {
    setViewProfile(true);
    setDashboardOpen(false);
    setProfileSet(false);
    setIsNavOpen(false);
  };

  const handleLogoutClick = () => {
    setIsUserLogged(false);
    logOutSuccessToast();
  }

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
        <div className="logout-btn-icon">
          <button className="logout-btn item-btn" onClick={handleLogoutClick}>Log Out</button>
          <img src={logoutIcon} alt="logout-icon"/>
        </div>
      </div>

      <div className="user-page-main">
        {ProfileSet && <SetProfile setProfileSet={setProfileSet} setViewProfile={setViewProfile} />}
        {dashboardOpen && <UserDashBoard />}
        {viewProfile && <ViewProfile setProfileSet={setProfileSet} setViewProfile={setViewProfile} />}
      </div>
    </div>
  );
};

export default UserPage;
