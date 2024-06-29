import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Userbar.module.css';

const Userbar = () => {
    const [navToggled, setNavToggled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('logdata'));
        if (loggedInUser) {
            setIsLoggedIn(true);
            setUsername(loggedInUser.username); // Assuming username is stored in logdata
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('logdata');
        sessionStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div className={styles.navBar}>
            {/* <div>{isLoggedIn && <span className={styles.username}>Hi, {username}!</span>}
</div> */}
            <input
                id="nav-toggle"
                type="checkbox"
                checked={navToggled}
                onChange={() => setNavToggled(!navToggled)}
                className={styles.navToggle}
            />
            <div id="nav-header" className={`${styles.navHeader} ${navToggled ? styles.toggled : ''}`}>
                <div id="nav-title" className={styles.navTitle}>
                    ℝ𝕖𝕒𝕝 𝔼𝕤𝕥𝕒𝕥𝕖
                </div>
                <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
                    <span id="nav-toggle-burger" className={styles.navToggleBurger}></span>
                </label>
                <hr />
            </div>

            <div id="nav-content" className={`${styles.navContent} ${navToggled ? styles.toggled : ''}`}>
                <NavButton icon="fas fa-palette" text="Profile" to="/userprofile" />
                <NavButton icon="fas fa-heart" text="Favorites" to="/Favorite" />
                <NavButton icon="fas fa-plus" text="Add Property" to="/Useradd" />
                <hr />
                <NavButton icon="fas fa-heart" text="Property Listing" to="/Userpro" />
                <NavButton icon="fas fa-heart" text="My Package" to="/Package" />
                <NavButton icon="fas fa-chart-line" text="Trending" to="" />
                <hr />
                <NavButton icon="fas fa-home" text="Home" to="/" />

                {isLoggedIn ? (
                    <button onClick={handleLogout} className={`${styles.navButton}`}><i className="fas fa-lock-open"></i> Logout</button>
                ) : (
                    <NavButton icon="fas fa-sign-in-alt" text="Login" to="" />
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
