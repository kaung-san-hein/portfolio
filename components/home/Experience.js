import styles from "./Experience.module.css";
import ProjectCard from "./ProjectCard";
import SkillBtn from "./SkillBtn";

const projects = [
  {
    id: 1,
    title: "Admin Panel of Phone Book App",
    category: "web app",
    duration: "4 months",
    develop: "developed with my teacher(IT ONE MM)",
    link: "https://rcs.com",
    url: "https://rcs.com",
    code: "Reactjs, Laravel(API), Postgresql, AWS",
  },
  {
    id: 2,
    title: "Kakehashi Japanese Language Center Official Website",
    category: "website",
    duration: "1.5 months",
    develop: "developed with RCS team",
    link: "https://kakehashi.com",
    url: "https://rcs.com",
    code: "HTML, CSS, Nextjs",
  },
  {
    id: 3,
    title: "Point of Sale(POS)",
    category: "mobile app",
    duration: "4 months",
    develop: "developed with RCS team",
    link: "https://kakehashi.com",
    url: "https://rcs.com",
    code: "Flutter, Sqlite",
  },
  {
    id: 4,
    title: "RCS Official Website",
    category: "website",
    duration: "3 months",
    develop: "developed with RCS team",
    link: "https://rcs.com",
    url: "https://rcs.com",
    code: "HTML, CSS, Nextjs, Strapi",
  },
];

const skills = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "Javascript",
  },
  {
    id: 4,
    skill: "PHP",
  },
  {
    id: 5,
    skill: "Dart",
  },
  {
    id: 6,
    skill: "Reactjs",
  },
  {
    id: 7,
    skill: "Nextjs",
  },
  {
    id: 8,
    skill: "Nodejs",
  },
  {
    id: 9,
    skill: "Strapi",
  },
  {
    id: 10,
    skill: "Laravel",
  },
  {
    id: 11,
    skill: "Flutter",
  },
  {
    id: 12,
    skill: "MySQL",
  },
  {
    id: 13,
    skill: "Postgresql",
  },
  {
    id: 14,
    skill: "MongoDB",
  },
  {
    id: 15,
    skill: "Sqlite",
  },
  {
    id: 16,
    skill: "Figma",
  },
];

function Experience() {
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
