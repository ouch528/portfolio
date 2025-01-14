import React from 'react';
import styles from "./Copyright.module.css";

export const Copyright = () => {
    return (
        <div className={styles.copyright} id="copyright">
            <p>© {new Date().getFullYear()} Oh Ungchan. All rights reserved.</p>
        </div>
    );
};