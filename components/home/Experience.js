import React, { useState } from "react";
import styles from "./Experience.module.css";
import ProjectCard from "./ProjectCard";
import SkillBtn from "./SkillBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import OtherProjectBtn from "./OtherProjectBtn";

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
          <Link href="/other" passHref legacyBehavior>
            <OtherProjectBtn />
          </Link>
        </div>
        {filteredProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.skillContainer}>
        {/* <h1>CV & Resume</h1>
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
        </a> */}
        {/* <a
          href="/pdf/06b3f1a8-2d0a-46df-a5d7-b5d7c813b619.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Degree
        </a> */}
        <h1>Certificates</h1>
        <a
          href="/images/CS50x.png"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          CS50&apos;s Introduction to Computer Science
        </a>
        <a
          href="/images/MicroservicesWithNodejsAndReact.jpg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Microservices With Nodejs And React
        </a>
        <a
          href="/images/NodeJSAdvancedConcepts.jpg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          NodeJS Advanced Concepts
        </a>
        <a
          href="/images/TheCompleteGoDeveloperGuide.jpeg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          The Complete Go Developer
        </a>
        <a
          href="/images/NestJSTheCompleteDeveloperGuide.jpeg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          NestJS The Complete Developer Guide
        </a>
        <a
          href="/images/TheCompleteTypescriptDeveloperGuide.jpeg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          The Complete Typescript Developer Guide
        </a>
        <a
          href="/images/DockerAndKubernetesTheCompleteGuide.jpg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Docker And Kubernetes The Complete Guide
        </a>
        <a
          href="/images/AWSCertifiedDeveloper.jpeg"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          AWS Certified Developer
        </a>
        <a
          href="/mongodb/01-Introduction-to-MongoDB.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Introduction to MongoDB
        </a>
        <a
          href="/mongodb/02-Schema-Design-Anti-Patterns.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Schema Design Anti Patterns
        </a>
        <a
          href="/mongodb/03-MongoDB-Logging-Basics.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB Logging Basics
        </a>
        <a
          href="/mongodb/04-Getting-Started-with-MongoDB-Atlas.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Getting Started with MongoDB Atlas
        </a>
        <a
          href="/mongodb/05-Replication-in-MongoDB.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Replication in MongoDB
        </a>
        <a
          href="/mongodb/06-MongoDB-for-SQL-Experts.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB for SQL Experts
        </a>
        <a
          href="/mongodb/07-MongoDB-and-the-Document-Model.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB and the Document Model
        </a>
        <a
          href="/mongodb/08-Connecting-to-a-MongoDB-Database.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Connecting to a MongoDB Database
        </a>
        <a
          href="/mongodb/09-MongoDB-CRUD-Operations-Insert-and-Find-Documents.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB CRUD Operations Insert and Find Documents
        </a>
        <a
          href="/mongodb/10-MongoDB-CRUD-Operations-Replace-and-Delete-Documents.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB CRUD Operations Replace and Delete Documents
        </a>
        <a
          href="/mongodb/11-MongoDB-CRUD-Operations-Modifying-Query-Results.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB CRUD Operations Modifying Query Results
        </a>
        <a
          href="/mongodb/12-MongoDB-Aggregation.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB Aggregation
        </a>
        <a
          href="/mongodb/13-MongoDB-Indexes.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB Indexes
        </a>
        <a
          href="/mongodb/14-MongoDB-Atlas-Search.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB Atlas Search
        </a>
        <a
          href="/mongodb/15-MongoDB-Data-Modeling-Intro.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB Data Modeling Intro
        </a>
        <a
          href="/mongodb/16-MongoDB-Transactions.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          MongoDB Transactions
        </a>
        <a
          href="/mongodb/17-Schema-Design-Patterns.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Schema Design Patterns
        </a>
        <a
          href="/mongodb/18-Advanced-Schema-Design-Patterns.pdf"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
          style={{ display: "none" }}
        >
          Advanced Schema Design Patterns
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
  );
}

export default Experience;
