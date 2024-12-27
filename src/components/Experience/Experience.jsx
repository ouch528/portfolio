import React from 'react';
import history from "../../data/history.json"
import styles from "./Experience.module.css"

export const Experience = () => {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <ul className={styles.history}>
                {history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <div className={styles.historyItemDetails}> 
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <ul className={styles.dates}>
                                        {historyItem.dates.map((date, idx) => (
                                            <li key={idx} className={styles.dateRange}>
                                                {`${date.startDate} - ${date.endDate}`}
                                            </li>
                                        ))}
                                    </ul>
                                <ul> 
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                                <ul className={styles.skills}>
                                    {historyItem.skills.map((skill, id) => {
                                        return (
                                            <li key={id} className={styles.skill}>
                                                {skill}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
} 