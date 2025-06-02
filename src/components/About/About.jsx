import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/logo.png")}
                    alt= "my logo"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}> 
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/dataAnalytics.png")} alt = "pic" className={styles.aboutItemImage}/>
                        <div className={styles.aboutItemText}> 
                            <h3>High Performance</h3>
                            <p> 
                                I am a high achiever, striving to be the best in everything I do.
                                Having been consistently at the top in highly competitive environments, I have developed a strong work ethic and a drive to excel amidst high stress and pressure.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/problemSolving.png")} alt = "pic" className={styles.aboutItemImage}/>
                        <div className={styles.aboutItemText}> 
                            <h3>Problem Solving</h3>
                            <p> 
                               I am able to recognize problems and inefficiencies, and I love coming up with creative solutions to solve them through innovations.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/automation.png")} alt = "pic" className={styles.aboutItemImage}/>
                        <div className={styles.aboutItemText}> 
                            <h3>Time Management</h3>
                            <p> 
                                I utilise my time very efficiently, by following a schedule everyday. Given that time is the one resource everyone has equally, mastering its use is my key to balancing and excelling in my various commitments.
                            </p>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </section>
    )
}