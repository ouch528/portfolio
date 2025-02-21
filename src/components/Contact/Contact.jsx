import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out and connect!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:oh_ungchan@u.nus.edu" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/email.png")} alt="Email icon" />
                    </a>
                    <a href="mailto:oh_ungchan@u.nus.edu" target="_blank" rel="noopener noreferrer">
                        oh_ungchan@u.nus.edu
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/ungchan-oh/" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ungchan-oh/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/ungchan-oh
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/ouch528" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/github.png")} alt="GitHub icon" />
                    </a>
                    <a href="https://github.com/ouch528" target="_blank" rel="noopener noreferrer">
                        github.com/ouch528
                    </a>
                </li>
            </ul>
        </footer>
    );
};
