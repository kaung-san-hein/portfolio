import { Fragment } from "react"
import Contact from "../components/home/Contact"
import Experience from "../components/home/Experience"
import Hero from "../components/home/Hero"

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Contact />
      <Experience />
    </Fragment>
  )
}
