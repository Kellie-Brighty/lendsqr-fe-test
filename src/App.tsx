import React from "react";
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import { LoginSection } from "./sections/LoginSection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSection />} />
      </Routes>
    </div>
  );
};

export default App;
