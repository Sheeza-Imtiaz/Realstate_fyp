import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('logdata'));
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(loggedInUser);
    }
  }, []);

  const handleNavClick = () => {
    setActive(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('logdata');
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <BootstrapNavbar expand="lg" className="Navbar">
      <BootstrapNavbar.Brand>
        <span className="nav-logo">
          <img className="icon" src="/images/logo.png" alt="logo Icon" />
          <div>
            <h3>ℝ𝕖𝕒𝕝 𝔼𝕤𝕥𝕒𝕥𝕖</h3>
          </div>
        </span>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="togle" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className={`nav-items ${active && "active"}`}>
          <NavLink exact to={"/"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            Home
          </NavLink>
          <NavLink to={"/about"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            About
          </NavLink>
          <NavLink to={"/properties"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            Properties
          </NavLink>
          <NavLink to={"/contact"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
            Contact
          </NavLink>
          {isLoggedIn ? (
            <NavDropdown
              title={
                <span>
                  <img src={user?.profile_photo_url} alt="Profile" className="profile-pic"/>
                  {user?.username}
                </span>
              }
              id="basic-nav-dropdown"
              className="nav-link"
            >
              <NavDropdown.Item onClick={() => navigate('/Userbar')}>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavLink to={"/login"} onClick={handleNavClick} activeClassName="bold" className="nav-link">
              <button className="nav-link-button">

                <span>Login/Registration</span>
              </button>
            </NavLink>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};
export default CustomNavbar;