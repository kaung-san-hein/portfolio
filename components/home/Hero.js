import styles from './Hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>Kaung San Hein - B.Sc(Computer Science)</h3>
        <h5>Web Developer | Mobile Developer</h5>
        <p>
          I am a passionate web and mobile developer with more than 3 years of
          experience. A quick learner by nature. I love challenges and solving
          problems. Currently, I am working at an organization as a web and
          mobile developer.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/profile.jpg"
          alt="Profile Image"
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Hero
