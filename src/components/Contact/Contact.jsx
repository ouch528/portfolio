import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out and connect!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/email.png")} alt="Email.icon" />
                <a href="mailto:ungchan052804@gmail.com" target="_blank" rel="noopener noreferrer">ungchan052804@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn.icon" />
                <a href="https://www.linkedin.com/in/ungchan-oh/" target="_blank" rel="noopener noreferrer">linkedin.com/ungchan-oh</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="GitHub.icon" />
                <a href="https://github.com/ouch528" target="_blank" rel="noopener noreferrer">github.com/ouch528</a>
            </li>
        </ul>
    </footer>
}