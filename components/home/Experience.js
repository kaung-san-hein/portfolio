import { useState } from "react";
import styles from "./Experience.module.css";
import ProjectCard from "./ProjectCard";
import SkillBtn from "./SkillBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Experience({ categories, projects, skills }) {
  const [category, setCategory] = useState("All");

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <div className={styles.container}>
      <div className={styles.experienceContainer}>
        <h1>Work Experiences</h1>
        <div>
          <FontAwesomeIcon icon={faFilter} className={styles.icon} />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="All">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {filteredProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.skillContainer}>
        <h1>Skills</h1>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <SkillBtn key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
