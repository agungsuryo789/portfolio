import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import About from "./Pages/About/index.tsx";
import Projects from "./Pages/Projects/index.tsx";
import Resume from "./Pages/Resume/index.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App className="slide-in-from-left" />} />
        <Route path="/about" element={<About className="slide-in-from-left" />} />
        <Route path="/projects" element={<Projects className="slide-in-from-left" />} />
        <Route path="/experience" element={<Resume className="slide-in-from-left" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
