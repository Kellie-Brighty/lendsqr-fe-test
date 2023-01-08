import React from "react";
import { Sidebar } from "../../components/Sidebar";

interface UserProps {}

export const User: React.FC<UserProps> = ({}) => {
  return (
    <Sidebar>
      <div>
        <div>Welcome to Adedeji's page</div>
      </div>
    </Sidebar>
  );
};
