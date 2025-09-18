import React, { useState, useEffect } from 'react';
import Login from './LoginSignUp/Login';
import SignUp from './LoginSignUp/SignUp';
import Dashboard from './Initial/Dashboard';
import UserPage from './User/UserPage';
import logo from './images/logo2.jpg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogInClicked, setIsLogInClicked] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const [userLoginDetails, setUserLoginDetails] = useState([]);

  useEffect(() => {
          const storedUserLoginDetails = localStorage.getItem("userLoggedtails");
          if (storedUserLoginDetails) {
          setUserLoginDetails(JSON.parse(storedUserLoginDetails));
          }
  }, []);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="brand">
          <img className="logo-img" src={logo} alt="logo" />
          <h1 className="header-text">AI-Powered Tourist Guide</h1>
        </div>

        {!isLogInClicked && !isUserLogged &&(
          <button onClick={() => setIsLogInClicked(true)}>Log In</button>
        )}
      </div>

      <ToastContainer
        enableMultiContainer
        containerId="below-header"
        position="top-right"
        toastContainerClassName="below-header-toast"
        style={{ top: "120px", right: "1.5rem" }}
      />

      <div className="app-main-content">
        {!isLogInClicked && !isSignUp && !isUserLogged &&
        <Dashboard />
        }

        {isUserLogged &&
          <UserPage justLoggedIn={justLoggedIn} setJustLoggedIn={setJustLoggedIn} setIsUserLogged={setIsUserLogged} />
        }
      </div>

      <div className="login-signup">
        {isLogInClicked && !isSignUp && !isUserLogged &&
          <Login handleSignUp={handleSignUp} setJustLoggedIn={setJustLoggedIn} setIsUserLogged={setIsUserLogged} userLoginDetails={userLoginDetails} setIsLogInClicked={setIsLogInClicked} />
        }

        {isLogInClicked && isSignUp && !isUserLogged &&
          <SignUp userLoginDetails={userLoginDetails} setUserLoginDetails={setUserLoginDetails} setIsSignUp={setIsSignUp} />
        }
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
