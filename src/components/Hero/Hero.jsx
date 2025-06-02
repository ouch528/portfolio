import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    const [currentAchievement, setCurrentAchievement] = useState("2 x Dean's List");

    // Alternate between achievements
    useEffect(() => {
        const achievements = ["3 x Dean's List", "4 x Data Competition Winner"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % achievements.length; // Cycle between items
            setCurrentAchievement(achievements[index]);
        }, 2000); // Switch every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Ungchan
                </h1>
                <h2 className={styles.brand}>
                    {/* <span className={styles.fixed}>2 x </span> */}
                    <span className={styles.achievement}>{currentAchievement}</span>
                </h2>
                <p className={styles.description}>
                    "A today better than yesterday and a tomorrow better than today".
                    With this motto in mind, I place heavy emphasis on enjoying and learning as much from the process.
                    And my achievements are just a natural by-product of the process.
                    <br />
                    <br />
                    I’m an aspiring Data Analyst with a passion for Machine Learning and Artificial Intelligence.
                    I am able to come up with creative solutions to problems using the data available that can induce great changes.
                    Reach out if you’d like to have a chat!
                </p>
                <a href="mailto:oh_ungchan@u.nus.edu" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/memoji.png")}
                alt="hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
