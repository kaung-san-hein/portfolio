import styles from "./Experience.module.css";
import ProjectCard from "./ProjectCard";
import SkillBtn from "./SkillBtn";

function Experience({ projects, skills }) {
  return (
    <div className={styles.container}>
      <div className={styles.experienceContainer}>
        <h1>Work Experiences</h1>
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.skillContainer}>
        <h1>Skills</h1>
        <div className={styles.skills}>
          {skills.map((item) => (
            <SkillBtn key={item.id} skill={item.skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
