import React, { useState } from 'react';
import styles from './Userbar.module.css';

const Userbar = () => {
    const [navToggled, setNavToggled] = useState(false);
    return (
        <div className={styles.navBar}>
            <input
                id="nav-toggle"
                type="checkbox"
                checked={navToggled}
                onChange={() => setNavToggled(!navToggled)}
                className={styles.navToggle}
            />
            <div id="nav-header" className={`${styles.navHeader} ${navToggled ? styles.toggled : ''}`}>
                <div id="nav-title" target="_blank" rel="noopener noreferrer" className={styles.navTitle}>
                {/* <img className="icon" src="/images/logo.png" alt="logo Icon" /> */}
                ℝ𝕖𝕒𝕝 𝔼𝕤𝕥𝕒𝕥𝕖
                </div>
                <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
                    <span id="nav-toggle-burger" className={styles.navToggleBurger}></span>
                </label>
                <hr />
            </div>

            <div id="nav-content" className={`${styles.navContent} ${navToggled ? styles.toggled : ''}`}>
                <NavButton icon="fas fa-palette" text="Profile" />
                <NavButton icon="fas fa-images" text="Assets" />
                <NavButton icon="fas fa-thumbtack" text="Add Property" />
                <hr />
                <NavButton icon="fas fa-heart" text="Property Listing" />
                <NavButton icon="fas fa-chart-line" text="Trending" />
                {/* <NavButton icon="fas fa-fire" text="Challenges" /> */}
                {/* <NavButton icon="fas fa-magic" text="Spark" /> */}
                <hr />
                <NavButton icon="fas fa-gem" text="Logout" />
                <div id="nav-content-highlight" className={styles.navContentHighlight}></div>
            </div>
        </div>
    );
};

const NavButton = ({ icon, text }) => (
    <div className={styles.navButton}>
        <i className={`${icon} ${styles.icon}`}></i>
        <span>{text}</span>
    </div>
);

export default Userbar;
