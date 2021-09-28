import styles from './Experience.module.css';

function Experience() {
    return (
        <div className={styles.container}>
            <div className={styles.experienceContainer}>
                <h1>Work Experience</h1>
            </div>
            <div className={styles.skillContainer}>
                <h1>Skills</h1>
            </div>
        </div>
    )
}

export default Experience;