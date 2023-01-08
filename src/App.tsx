import React from "react";
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { LoginSection } from "./sections/LoginSection";
import { UserSection } from "./sections/UserSection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSection />} />
        <Route path="/users" element={<UserSection />} />
      </Routes>
    </div>
  );
};

export default App;
