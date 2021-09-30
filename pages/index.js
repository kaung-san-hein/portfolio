import { Fragment } from "react"
import Contact from "../components/home/Contact"
import Experience from "../components/home/Experience"
import Hero from "../components/home/Hero"
import { projects } from "../data/projects"
import { skills } from "../data/skills"

export async function getStaticProps() {

  return {
    props: {
      projects,
      skills
    },
  }
}

export default function Home({projects, skills}) {
  return (
    <Fragment>
      <Hero />
      <Contact />
      <Experience projects={projects} skills={skills} />
    </Fragment>
  )
}
