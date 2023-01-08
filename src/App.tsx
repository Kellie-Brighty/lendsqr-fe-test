import React from "react";
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { LoginSection } from "./sections/LoginSection";
import { UserSection } from "./sections/UserSection";
import { User } from "./sections/User_pages/Users";
import { Guarantors } from "./sections/User_pages/Guarantors";
import { Loans } from "./sections/User_pages/Loans";
import { Decision_Model } from "./sections/User_pages/Decision_Model";
import { Savings } from "./sections/User_pages/Savings";
import { Loan_Request } from "./sections/User_pages/Loan_Request";
import { Whitelist } from "./sections/User_pages/Whitelist";
import { Karma } from "./sections/User_pages/Karma";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/dashboard-guarantors" element={<Guarantors />} />
        <Route path="/dashboard-loans" element={<Loans />} />
        <Route path="/dashboard-decision-model" element={<Decision_Model />} />
        <Route path="/dashboard-savings" element={<Savings />} />
        <Route path="/dashboard-loan-request" element={<Loan_Request />} />
        <Route path="/dashboard-whitelist" element={<Whitelist />} />
        <Route path="/dashboard-karma" element={<Karma />} />
      </Routes>
    </div>
  );
};

export default App;
