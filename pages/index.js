import { Fragment } from "react";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { categories } from "../data/categories";

export async function getStaticProps() {
  return {
    props: {
      categories,
      projects,
      skills,
    },
  };
}

export default function Home({ categories, projects, skills }) {
  return (
    <Fragment>
      <Hero />
      <Contact />
      <Experience categories={categories} projects={projects} skills={skills} />
    </Fragment>
  );
}
