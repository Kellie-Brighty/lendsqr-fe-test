import React from "react";
import { Sidebar } from "../../components/Sidebar";

interface DecisionProps {}

export const Decision_Model: React.FC<DecisionProps> = ({}) => {
  return (
    <Sidebar>
      <div>
        <div>Decision Model</div>
      </div>
    </Sidebar>
  );
};
