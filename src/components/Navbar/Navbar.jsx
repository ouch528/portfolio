import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils.js'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={navbar ? styles['navbar-active'] : styles.navbar}>
            <div className={styles.navbarContainer}>

                <a className={styles.title} href='/portfolio/'>
                    Portfolio
                </a>
                <div className={styles.menu}>
                    <img
                        className={styles.menuBtn}
                        src={
                            menuOpen
                                ? getImageUrl(`nav/closeIcon.png`)
                                : getImageUrl(`nav/menuIcon.png`)
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)}>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#experience'>Experience</a>
                        </li>
                        <li>
                            <a href='#academics'>Academics</a>
                        </li>
                        <li>
                            <a href='#competitions'>Competitions</a>
                        </li>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}