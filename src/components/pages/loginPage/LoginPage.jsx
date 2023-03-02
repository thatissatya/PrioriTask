import React from "react";
import "./LoginPage.css";
import prioritask from "../../../../public/assets/prioritask.svg";
const _loginPage = () => {
    return (
        <div className="ui-login-page">
            <div className="ui-login-page-logo">
                <img src={prioritask} alt="N/A" />
            </div>
            <div className="ui-login-page-container">
                <div className="ui-login-page-container-header">
                    <div className="ui-login-page-container-header-title">Welcome</div>
                    <div className="ui-login-page-container-header-description">
                        Welcome back! Please enter your details.
                    </div>
                </div>
                <div className="ui-login-page-container-login-with-google">
                    <img
                        src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                        height="20px"
                        alt="Loading..."
                    />{" "}
                    Log in with Google
                </div>
                <div className="ui-login-page-container-login-or">
                    <div className="ui-login-page-container-login-or-line"></div>
                    <div className="ui-login-page-container-login-or-text">or</div>
                    <div className="ui-login-page-container-login-or-line"></div>
                </div>
                <div className="ui-login-page-container-login-form">
                    <div className="ui-login-page-container-login-form-email">
                        {" "}
                        <input type="email" className="no-outline" placeholder="Email" />{" "}
                    </div>
                    <div className="ui-login-page-container-login-form-password">
                        {" "}
                        <input type="password" className="no-outline" placeholder="Password" />{" "}
                    </div>
                    <div className="ui-login-page-container-login-form-credentials">
                        <div className="ui-login-page-container-login-form-credentials-save">
                            <input type="checkbox" /> Remember for 30 days
                        </div>
                        <div className="ui-login-page-container-login-form-credentials-forgot">
                            Forgot password
                        </div>
                    </div>
                    <div className="ui-login-page-container-login-form-login">
                        {" "}
                        Login{" "}
                    </div>
                </div>
                <div className="ui-login-page-container-sign-up">
                    Don’t have an account?{" "}
                    <a href="https:www.google.com/">Sign up for free </a>
                </div>
            </div>
        </div>
    );
};

export const LoginPage = _loginPage;
