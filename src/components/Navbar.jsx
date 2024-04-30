import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, isActive] = useState(false);

  const handleNavClick = () => {
    isActive(false);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <h3>logo</h3>
      </span>

      <div className={`nav-items ${active && "switch"}`}>
        <Link to={"/"} onClick={handleNavClick}>
          Home
        </Link>
        <Link to={"/about"} >
          About
        </Link>
        <Link to={"/services"} onClick={handleNavClick}>
          Services
        </Link>
        <Link to={"/contact"} onClick={handleNavClick}>
          Contact
        </Link>

        <Link to={"/Login"} onClick={handleNavClick}>
          <button>
            <span>Login/Registration</span>
          </button>
        </Link>
      </div>

      <div
        className={`nav-toggle ${active && "switch"}`}
        onClick={() => isActive(!active)}
      >
        <div className="hamburger"></div>
      </div>
    </div>
  );
};

export default Navbar;
