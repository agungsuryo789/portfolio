import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import Portfolio from "./Pages/Portfolio/index.tsx";
// import Resume from "./Pages/Resume/index.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
