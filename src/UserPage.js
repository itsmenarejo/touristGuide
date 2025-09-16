import React, { useState } from 'react';
import menu from './images/menu.png';
import './UserPage.css';
import SetProfile from './SetProfile';

const UserPage = () => {

    const [isProfileSet, setIsProfileSet] = useState(false);
    const [ProfileSet, setProfileSet] = useState(false);

    const handleSetProfileClick = () => {
        setIsProfileSet(true);
        setProfileSet(true);
    }

    return (
        <div className="userpage">
            <button className="menu">
                <img src={menu} alt="hamburger-menu"/>
            </button>

            <div className="menu-items">
                <ul className="items">
                    { !isProfileSet ?
                         <li><button className="item-btn" onClick={ handleSetProfileClick }>Set Your Profile</button></li> :
                         <li><button className="item-btn">View Profile</button></li>
                    }
                    <li></li>
                </ul>
            </div>

            <div className="set-profile">
                { ProfileSet && <SetProfile />}
            </div>
        </div>
    )
}

export default UserPage;