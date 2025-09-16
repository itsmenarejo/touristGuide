import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import UserPage from './UserPage';
import logo from './images/logo2.jpg';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

        {!isLoggedIn && (
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        )}
      </div>

      <div className="app-main-content">
        {/*!isLoggedIn && !isSignUp &&
        <Dashboard />
        */}
        <UserPage />
      </div>

      <div className="login-signup">
        {isLoggedIn && !isSignUp &&
          <Login handleSignUp={handleSignUp} />
        }

        {isLoggedIn && isSignUp &&
          <SignUp />
        }
      </div>
    </div>
  );
}

export default App;
