import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Userbar.module.css';

const Userbar = () => {
    const [navToggled, setNavToggled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('logdata'));
        if (loggedInUser) {
            setIsLoggedIn(true);
            // setUser(loggedInUser);
        }
    }, []);

    const handleLogout = () => {
        console.log("it called");
        sessionStorage.removeItem('logdata');
        sessionStorage.removeItem('token');
        setIsLoggedIn(false);
        // setUser(null);
        navigate('/');
    };

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

                {isLoggedIn ? (
                    <button onClick={handleLogout} className={`${styles.navButton} ${styles.logoutButton}`} style={{ marginRight: '9rem' }}>
                        <i className="fas fa-gem"></i>
                        <span>Logout</span>
                    </button>
                ) : (
                    <NavButton icon="fas fa-sign-in-alt" text="Login" to="/login" />
                )}
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
