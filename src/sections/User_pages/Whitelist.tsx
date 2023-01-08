import React from "react";
import { Sidebar } from "../../components/Sidebar";

interface WhitelistProps {}

export const Whitelist: React.FC<WhitelistProps> = ({}) => {
  return (
    <Sidebar>
      <div>
        <div>Whitelist</div>
      </div>
    </Sidebar>
  );
};
