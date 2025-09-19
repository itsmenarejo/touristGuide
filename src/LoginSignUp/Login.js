import React, { useState } from "react";
import "./LoginSignUp.css";
import { toast } from 'react-toastify';

const Login = ({ 
  handleSignUp, 
  setIsUserLogged, 
  // userLoginDetails, 
  setJustLoggedIn, 
  setIsLogInClicked 
}) => {

  const [enteredLoginInfo, setEnteredLoginInfo] = useState({
    email: "",
    securityPin: ""
  })

  const handleChange = (e) => {
    setEnteredLoginInfo({...enteredLoginInfo, [e.target.name]: e.target.value});
  }

  // const validate = () => {
  //   return userLoginDetails.some(
  //     detail =>
  //       detail.firstName === enteredLoginInfo.email &&
  //       detail.password === enteredLoginInfo.securityPin
  //   );
  // };

    const logInErrorToast = () => {
      toast.dismiss();
      toast.error(
        <div>
          <div style={{ fontSize: '0.9em', marginTop: '4px' }}>
            Invalid Credentials!
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 2500,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: "#fee2e2",
            color: "#991b1b",
            borderRadius: "16px",
            fontSize: "1rem",
            fontWeight: "500",
          },
          containerId: "below-header",
        }
      );
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const validationResult = validate();

    // if (validationResult) {
    //   setJustLoggedIn(true);
    //   setIsUserLogged(true);
    //   setIsLogInClicked(false);
    // } else {
    //   logInErrorToast();
    // }
    try {
      const response = await fetch('http://localhost:5000/api/users/login',{
        method:'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          email: enteredLoginInfo.email,
          securityPin: enteredLoginInfo.securityPin,
        }),
      });

      const data = await response.json();
      
      if(response.ok) {
        // Storing the token and user ID from the backend response
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data._id);
        setJustLoggedIn(true);
        setIsUserLogged(true);
        setIsLogInClicked(false);
      } else {
        logInErrorToast();
      }
    }catch (error) {
      console.error('Login error: ', error);
      logInErrorToast();
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="securityPin"
              placeholder="Security PIN"
              onChange={handleChange}
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
