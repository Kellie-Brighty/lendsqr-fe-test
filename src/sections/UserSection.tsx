import React from "react";
import { Header } from "../components/Header";

interface UserSectionProps {}

export const UserSection: React.FC<UserSectionProps> = ({}) => {
  return (
    <div>
      <Header />
      <div>User Section</div>
    </div>
  );
};
