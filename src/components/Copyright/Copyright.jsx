import React from 'react';
import styles from "./Copyright.module.css";

export const Copyright = () => {
    return (
        <div className={styles.copyright} id="copyright">
            <p>© {new Date().getFullYear()} OH UNGCHAN <br></br>All rights reserved</p>
        </div>
    );
};