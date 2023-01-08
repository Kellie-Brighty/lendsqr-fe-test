import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Guarantors } from "./User_pages/Guarantors";
import { Loans } from "./User_pages/Loans";
import { User } from "./User_pages/Users";

interface UserSectionProps {}

export const UserSection: React.FC<UserSectionProps> = ({}) => {
  return (
    <div>
      <Sidebar>
        <Routes>
          
        </Routes>
      </Sidebar>
    </div>
  );
};
