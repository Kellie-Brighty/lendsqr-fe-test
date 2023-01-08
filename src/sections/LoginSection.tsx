import React, { useState } from "react";
import "../Styles/Login_styles/login.css";
import Logo from "../assets/images/lendsqr_logo.png";
import Illustration from "../assets/svgs/login_illustration.svg";
import { useNavigate } from "react-router-dom";

interface LoginSectionProps {}

export const LoginSection: React.FC<LoginSectionProps> = ({}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShow(!show);
  };

  return (
    <div className="Login">
      <div className="inner_flex">
        <div className="left">
          <div>
            <img src={Logo} alt="lendsqr_logo" className="logo" />
            <div className="illustration_container">
              <img src={Illustration} alt="" className="illustration" />
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <p className="title">Welcome!</p>
            <p className="subtitle">Enter details to login</p>
            <div className="input_container">
              <div className="custom_input">
                <input type="email" className="input_box" placeholder="Email" />
              </div>
              <div className="custom_input">
                <input
                  type={show ? "text" : "password"}
                  className="input_box"
                  placeholder="Password"
                />
                <p className="password_toggle" onClick={() => togglePassword()}>
                  {show ? "Hide" : "Show"}
                </p>
              </div>
            </div>
            <p className="forgot_password">Forgot Password</p>
            <button className="login_btn" onClick={() => navigate("/users")}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
