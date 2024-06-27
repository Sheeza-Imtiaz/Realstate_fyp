import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../user/Userbar.module.css';

const Sidebar = () => {
    const [navToggled, setNavToggled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('logdata'));
        if (loggedInUser) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('logdata');
        sessionStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <aside className={styles.navBar}>
            <input
                id="nav-toggle"
                type="checkbox"
                checked={navToggled}
                onChange={() => setNavToggled(!navToggled)}
                className={styles.navToggle} />

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
                <NavButton icon="fas fa-tachometer-alt" text="Dashboard" to="/dashboard" />
                <NavButton icon="fas fa-users" text="Users" to="/users" />
                <NavButton icon="fas fa-book-open" text="Add Properties" to="/addpro" />
                <NavButton icon="fas fa-building" text="Properties" to="/prodetail" />
                <NavButton icon="fas fa-comments" text="Messages" to="/Message" />
                <NavButton icon="fas fa-plus" text="Pricing Plan" to="/pricingplan" />
                <NavButton icon="fas fa-id-card" text="Pricing Cards" to="/price" />
                <NavButton icon="fas fa-user-edit" text="Profile" to="/profile" />
                <NavButton icon="fas fa-home" text="Home" to="/" />
                
                {isLoggedIn ? (
                    <NavButton onClick={handleLogout} className={`${styles.navButton}`}  icon="fas fa-lock-open" text="Logout"></NavButton>
                ) : (
                    <NavButton icon="fas fa-sign-in-alt" text="Login" to="/login" />
                )}
                <div id="nav-content-highlight" className={styles.navContentHighlight}></div>
            </div>
        </aside>
    );
};

const NavButton = ({ icon, text, to, onClick }) => (
    <Link to={to} className={styles.navButton} onClick={onClick}>
        <i className={`${icon} ${styles.icon}`}></i>
        <span>{text}</span>
    </Link>
);

export default Sidebar;
