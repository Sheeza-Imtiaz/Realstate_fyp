import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, isActive] = useState(false);

  const handleNavClick = () => {
    isActive(false);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">
      <img className="icon" src="/images/logo.png" alt="logo Icon" />
      <div>
      <h3> ℝ𝕖𝕒𝕝 𝔼𝕤𝕥𝕒𝕥𝕖 </h3>
      </div>
      </span>
      
      {/* <h3> 𝕽𝖊𝖆𝖑 𝕰𝖘𝖙𝖆𝖙𝖊 </h3> */}
      <div className={`nav-items ${active && "switch"}`}>
        <NavLink exact to={"/"} onClick={handleNavClick} activeClassName="bold">
          Home
        </NavLink>
        <NavLink to={"/about"} activeClassName="bold">
          About
        </NavLink>
        <NavLink to={"/propertIes"} onClick={handleNavClick} activeClassName="bold">
          Properties
        </NavLink>
        <NavLink to={"/contact"} onClick={handleNavClick} activeClassName="bold">
          Contact
        </NavLink>
        <NavLink to={"/Login"} onClick={handleNavClick} activeClassName="bold">
          <button>
            <span>Login/Registration</span>
          </button>
        </NavLink>
      </div>
      <div
        className={`nav-toggle ${active && "switch"}`}
        onClick={() => isActive(!active)}
      >
      </div>
    </div>
  );
};

export default Navbar;
