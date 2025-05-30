import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Suggestions from './components/Suggestions';
import HowItWorks from './components/HowItWorks';
import './App.css';

export default function App() {
  return (
    <Router>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand text-warning" to="/">Resume Analyzer</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/how-it-works"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                >
                  How It Works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/suggestions"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                >
                  Suggestions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) => "nav-link text-white" + (isActive ? " active" : "")}
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container my-5 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
}
