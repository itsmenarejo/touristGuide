import React from "react";
import logo from './images/logo.jpg';
import "./BankLogin.css";

const BankLogin = ({ handleSignUp }) => {
  return (
    <div className="login-container container">
      <header>
        <div className="logo">
          <img src={logo} alt="Tourist Guide Logo" className="logo-img" />
          <h2>Tourist Guide User Login</h2>
          <p>Access your account securely</p>
        </div>
      </header>

      <main>
        <div className="login">
          <form action="" method="POST">
            <input
              type="text"
              name="userId"
              placeholder="User Id"
              required
            />
            <input
              type="password"
              name="securityPin"
              placeholder="Security PIN"
              required
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </main>

      <footer className="credits">
        <p>&copy; 2025 TN Online Tourist Guide. All rights reserved.</p>
        <div className="nav">
          <button onClick={ handleSignUp }>Sign Up</button>
          <a href="https://github.com/itsmenarejo/onlineBanking.git">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default BankLogin;
