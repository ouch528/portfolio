import React from 'react';
import competitions from "../../data/competitions.json"
import styles from "./Competitions.module.css"

export const Competitions = () => {
    return <section className={styles.container} id="competitions">
        <h2 className={styles.title}>Competitions</h2>
        <div className={styles.content}>
            <ul className={styles.competition}>
                {competitions.map((competitionItem, id) => {
                    return (
                        <li key={id} className={styles.competitionItem}>
                            <div className={styles.competitionItemDetails}>
                                <h3>{`${competitionItem.name}`}</h3>
                                <p>{`${competitionItem.position}`}</p>
                                <ul>
                                    {competitionItem.description.map((competition, id) => {
                                        return <li key={id}>{competition}</li>
                                    })}
                                </ul>
                                <ul className={styles.skills}>
                                    {competitionItem.skills.map((skill, id) => {
                                        return (
                                            <li key={id} className={styles.skill}>
                                                {skill}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className={styles.links}>
                                    <a href={competitionItem.source} target="_blank" rel="noopener noreferrer" className={styles.link}>View Solution</a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
} 