import React from "react";
import { useNavigate } from "react-router-dom";


export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="app-container">
            <div className="welcome-container">
                <div className="welcome-top-space" />


                <div className="welcome-content">
                    <h1 className="welcome-title">Welcome to PopX</h1>
                    <p className="welcome-subtitle">
                        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
                    </p>

                    <div className="welcome-buttons">
                        <button className="btn btn-primary" onClick={() => navigate("/Signup")}>Create Account</button>
                        <button className="btn btn-secondary" onClick={() => navigate("/SignIn")}> Already Registered? Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
