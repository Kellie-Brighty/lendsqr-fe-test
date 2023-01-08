import React from "react";
import { Sidebar } from "../../components/Sidebar";

interface LoanRequestProps {}

export const Loan_Request: React.FC<LoanRequestProps> = ({}) => {
  return (
    <Sidebar>
      <div>
        <div>Loan Request</div>
      </div>
    </Sidebar>
  );
};
