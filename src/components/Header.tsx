import React from "react";
import "../Styles/User_styles/Header/header.css";
import Logo from "../assets/images/lendsqr_logo.png";
import Search_Icon from "../assets/images/search.png";
import Notify_Icon from "../assets/images/notify.png";
import Profile_Picture from "../assets/images/profile_picture.png";
import Arrow_Down from "../assets/images/header_arrowdown.png";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="Header">
      <div className="inner_flex">
        <img src={Logo} alt="lendsqr_logo" className="logo" />
        <div className="custom_input">
          <input
            type="text"
            placeholder="Search for anything"
            className="input"
          />
          <div className="search_icon_container">
            <img src={Search_Icon} alt="" />
          </div>
        </div>
        <div className="right_side">
          <p className="docs">Docs</p>
          <img src={Notify_Icon} alt="notify_icon" className="notify_icon" />
          <div className="profile">
            <img
              src={Profile_Picture}
              alt="profile_picture"
              className="profile_picture"
            />
            <p className="profile_name" >Adedeji</p>
            <img src={Arrow_Down} alt="menu_opener" className="arrow_down" />
          </div>
        </div>
      </div>
    </div>
  );
};
