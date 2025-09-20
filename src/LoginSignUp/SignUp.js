import React, { useState } from "react";
import "./LoginSignUp.css";
import { toast } from 'react-toastify';
import back from '../images/left-arrow.png';

const SignUp = ({setIsSignUp}) => {

    const [enteredUserInfo, setEnteredUserInfo] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const signUpSuccessToast = () => {
        toast.dismiss();
        toast.success(
          <div>
            <div style={{ fontSize: '0.9em', marginTop: '4px' }}>
              Signed Up Successfully!
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

    const signUpErrorToast = () => {
        toast.dismiss();
        toast.error(
        <div>
            <div style={{ fontSize: '0.9em', marginTop: '4px' }}>
            User already exists!
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

    const handleChange = (e) => {
        setEnteredUserInfo({...enteredUserInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    firstName: enteredUserInfo.firstName,
                    lastName: enteredUserInfo.lastName,
                    email: enteredUserInfo.email,
                    securityPin: enteredUserInfo.password, // Corrected key from 'password' to 'securityPin'
                }),
            });
            const data = await response.json();

            if(response.ok){
                signUpSuccessToast();
                setIsSignUp(false);
            } else{
                signUpErrorToast();
            }
        } catch (error) {
            console.error('SignUp Error: ', error);
            signUpErrorToast();
        }
        // const userExists = userLoginDetails.some(
        //     (user) => user.email === enteredUserInfo.email
        // );

        // if (userExists) {
        //     signUpErrorToast();
        // } else {
        //     setUserLoginDetails((prev) => [...prev, enteredUserInfo]);
        //     signUpSuccessToast();
        //     setIsSignUp(false);
        // }
    }

    // useEffect(() => {
    //     localStorage.setItem("userLoggedtails", JSON.stringify(userLoginDetails));
    // }, [userLoginDetails]);

    return (
        <div className="signup-container">
            <header>
                <div className="head">
                    <div className="backBtn-h2">
                        <button onClick={() => setIsSignUp(false)} ><img src={back} alt="nav-back" /></button>
                        <h2>Sign Up</h2>
                    </div>
                    <p>Create your account securely</p>
        </div>
            </header>

            <main>
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={enteredUserInfo.firstName}
                            onChange={handleChange}
                            required
                            />
                            <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={enteredUserInfo.lastName}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={enteredUserInfo.email}
                        onChange={handleChange}
                        required
                        />
                        
                        <input
                        type="password"
                        name="password"
                        placeholder="Create security PIN"
                        value={enteredUserInfo.password}
                        onChange={handleChange}
                        required
                        />

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </main>
        </div>
    );
};

export default SignUp;