import React from "react";
import { Sidebar } from "../../components/Sidebar";

interface LoansProps {}

export const Loans: React.FC<LoansProps> = ({}) => {
  return (
    <Sidebar>
      <div>
        <div>Loans</div>
      </div>
    </Sidebar>
  );
};
