import React from "react";
import { customer_links } from "../utils/sidebar_data";
import "../Styles/User_styles/Sidebar/sidebar.css";
import Organization_Icon from "../assets/Dashboard_icons/dashboard_organization_icon.png";
import Switch_Org_Arrow from "../assets/Dashboard_icons/switch_org_arrow.png";
import Dashboard_Icon from "../assets/Dashboard_icons/dashboard_icon.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "./Header";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Header />
      <div className="Sidebar">
        <div className="main_sidebar">
          <div className="switch_org">
            <img src={Organization_Icon} alt="" />
            <p className="switch_org_text">Switch Organization</p>
            <img src={Switch_Org_Arrow} alt="" className="switch_arrow" />
          </div>
          <div className="dashboard_text_container">
            <img src={Dashboard_Icon} alt="" />
            <p className="dashboard_text">Dashboard</p>
          </div>
          <div className="customer_section ">
            <p className="sidebar_title">Customers</p>
            {customer_links.map((link, idx) => (
              <div
                className={
                  location.pathname === link.path
                    ? "sidebar_link_selected"
                    : "sidebar_link"
                }
                key={idx}
                onClick={() => navigate(`${link.path}`)}
              >
                <img className="link_icon" src={link.icon} alt="" />
                <p className="link_title">{link.title}</p>
              </div>
            ))}
          </div>
        </div>
        <main className="main_content">{children}</main>
      </div>
    </div>
  );
};
