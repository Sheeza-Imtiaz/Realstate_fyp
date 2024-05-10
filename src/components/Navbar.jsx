import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  const [active, setActive] = useState(false);

  const handleNavClick = () => {
    setActive(false);
  };

  return (
    <BootstrapNavbar expand="lg" className="Navbar">
      <BootstrapNavbar.Brand>
        <span className="nav-logo">
          <img className="icon" src="/images/logo.png" alt="logo Icon" />
          <div>
            <h3> ℝ𝕖𝕒𝕝 𝔼𝕤𝕥𝕒𝕥𝕖 </h3>
          </div>
        </span>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="togle" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className={`nav-items ${active && "active"}`}>
          <NavLink exact to={"/"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            Home
          </NavLink>
          <NavLink to={"/about"} activeClassName="bold" className="nav-link">
            About
          </NavLink>
          <NavLink to={"/properties"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            Properties
          </NavLink>
          <NavLink to={"/contact"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            Contact
          </NavLink>
          <NavLink to={"/Login"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            <button className="nav-link-button">
              <span>Login/Registration</span>
            </button>
          </NavLink>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
