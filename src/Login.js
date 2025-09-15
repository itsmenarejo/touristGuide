import React from "react";
import logo from './images/logo.jpg';
import "./LoginSignUp.css";

const Login = ({ handleSignUp }) => {
  return (
    <div className="login-container">
      <header>
        <div className="head">
          <h2>User Login</h2>
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

      <footer className="foot">
        <p>Don't have an account ? </p>
        <button onClick={ handleSignUp }>Sign Up</button>
      </footer>
    </div>
  );
};

export default Login;
