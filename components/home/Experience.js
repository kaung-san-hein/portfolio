import React, { useState } from 'react'
import styles from './Experience.module.css'
import ProjectCard from './ProjectCard'
import SkillBtn from './SkillBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import OtherProjectBtn from './OtherProjectBtn'

function Experience({ categories, projects, skills }) {
  const [category, setCategory] = useState('All')

  const filteredProjects =
    category === 'All'
      ? projects
      : projects.filter((project) => project.category === category)

  return (
    <div className={styles.container}>
      <div className={styles.experienceContainer}>
        <h1>Work Experiences</h1>
        <div className={styles.experienceTitleContainer}>
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
          <Link
            href="/other"
            passHref legacyBehavior
          >
            <OtherProjectBtn />
          </Link>
        </div>
        {filteredProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.skillContainer}>
        <h1>CV & Resume</h1>
        <a
          href="/pdf/CV.docx.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          CV
        </a>
        <a
          href="/pdf/Resume.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Resume
        </a>
        <h1>Certificates</h1>
        <a
          href="/images/CS50x.png"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          CS50&apos;s Introduction to Computer Science
        </a>
        <h1>NPM Packages</h1>
        <a
          href="https://www.npmjs.com/package/convert-mm"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          convert-mm
        </a>
        <h1>Skills</h1>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <SkillBtn key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
