import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Userbar.module.css';
// import Useradd from './Useradd'
const Userbar = () => {
    const [navToggled, setNavToggled] = useState(false);

    return (
        <div className={styles.navBar}>
            <input
                id="nav-toggle"
                type="checkbox"
                checked={navToggled}
                onChange={() => setNavToggled(!navToggled)}
                className={styles.navToggle} />

            <div id="nav-header" className={`${styles.navHeader} ${navToggled ? styles.toggled : ''}`}>
                <div id="nav-title" className={styles.navTitle}>
                    {/* <img className="icon" src="/images/logo.png" alt="logo Icon" /> */}
                    ℝ𝕖𝕒𝕝 𝔼𝕤𝕥𝕒𝕥𝕖
                </div>
                <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
                    <span id="nav-toggle-burger" className={styles.navToggleBurger}></span>
                </label>
                <hr />
            </div>
            <div id="nav-content" className={`${styles.navContent} ${navToggled ? styles.toggled : ''}`}>
                <NavButton icon="fas fa-palette" text="Profile" to="/userprofile" />
                <NavButton icon="fas fa-images" text="Assets" to="/assets" />
                <NavButton icon="fas fa-thumbtack" text="Add Property" to="/Useradd" />
                <hr />
                <NavButton icon="fas fa-heart" text="Property Listing" to="/Userpro" />
                <NavButton icon="fas fa-chart-line" text="Trending" to="/trending" />
                <hr />
                <NavButton icon="fas fa-home" text="Home" to="/" />
                <NavButton icon="fas fa-gem" text="Logout" to="/logout" />
                <div id="nav-content-highlight" className={styles.navContentHighlight}></div>
            </div>
        </div>
    );
};

const NavButton = ({ icon, text, to }) => (
    <Link to={to} className={styles.navButton}>
        <i className={`${icon} ${styles.icon}`}></i>
        <span>{text}</span>
    </Link>
);

export default Userbar;
    