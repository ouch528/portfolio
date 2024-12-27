import React, { useState, useEffect } from 'react';
import coursework from "../../data/coursework.json";
import achievements from "../../data/achievements.json";
import styles from "./Academics.module.css";

export const Academics = () => {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1100);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1100);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const school = "National University of Singapore (NUS), School of Computing";
    const major = "Business Analytics (Specialization in Machine Learning), Second Major in Statistics";
    const gpa = "4.97/5.0";

    return (
        <section className={styles.container} id="academics">
            <h2 className={styles.title}>Academics</h2>
            <div className={styles.academicDetails}>
                <p className={styles.school}>{school}</p>
                <p className={styles.major}>{major}</p>
                <p className={styles.gpa}>GPA: {gpa}</p>
            </div>
            <div className={styles.content}>
                <h3 className={styles.subTitle}>Achievements</h3>
                <ul className={styles.achievement}>
                    {achievements.map((achievement, id) => (
                        <li key={id} className={styles.achievementItem}>
                            {isMobileView ? (
                                <a
                                    href={achievement.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    {achievement.name}
                                </a>
                            ) : (
                                <>
                                    <span>{achievement.name}</span>
                                    <div className={styles.links}>
                                        <button
                                            onClick={() =>
                                                window.open(
                                                    achievement.credential,
                                                    "_blank"
                                                )
                                            }
                                            className={styles.link}
                                        >
                                            View Credential
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.content}>
                <h3 className={styles.subTitle}>Relevant Coursework</h3>
                <ul className={styles.course}>
                    {coursework.map((courseworkItem, id) => (
                        <li key={id} className={styles.courseworkItem}>
                            <h3 className={styles.courseworkItemDetails}>
                                {`${courseworkItem.code} ${courseworkItem.name}`}
                            </h3>
                            <p className={styles.courseGrade}>
                                Grade: {courseworkItem.grade === 'A' ? `${courseworkItem.grade}\u00A0\u00A0` : courseworkItem.grade}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
