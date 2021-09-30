import styles from "./SkillBtn.module.css";

function SkillBtn({ skill }) {
  return <div className={styles.skill}>{skill}</div>;
}

export default SkillBtn;
