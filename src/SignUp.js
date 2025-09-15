import React from "react";
import logo from './images/logo.jpg';
import "./LoginSignUp.css";

const SignUp = () => {
    return (
        <div className="signup-container">
            <header>
                <div className="head">
                <h2>Sign Up</h2>
                <p>Create your account securely</p>
                </div>
            </header>

            <main>
                <div className="signup">
                    <form action="" method="POST">
                        <div className="name">
                            <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            required
                            />
                            <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            required
                            />
                        </div>

                        <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        />
                        
                        <input
                        type="password"
                        name="securityPin"
                        placeholder="Create security PIN"
                        required
                        />

                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </main>
        </div>
    )
}

export default SignUp;