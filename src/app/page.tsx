"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShinyButton as Button } from "./components/Button";
import Home from "./pages/Home";
import PlayedGames from "./pages/PlayedGames";
import "./globals.css";



const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div>
            <div className="logo">Agha, XI RPL A</div>
            <div className="menu">
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/played-games">
                <Button>Played Games</Button>
              </Link>
            </div>
          </div>
          <div className="sidebar-footer">
            8/18/2025
            <br />
            Malang, Indonesia
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/played-games" element={<PlayedGames />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
