import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import {
  faYoutube,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className={styles.footer}>
      <h3>
        <FontAwesomeIcon icon={faSmile} />
        You can hire me!
        <FontAwesomeIcon icon={faSmile} />
      </h3>
      <div className={styles.linkContainer}>
        <a
          href="https://www.youtube.com/channel/UCOFTCb6iJgqffcU1_9xgqpA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>{' '}
        <a
          href="https://github.com/kaung-san-hein"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>{' '}
        <a
          href="https://stackoverflow.com/users/13863327/kaung-san-hein"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </div>
  )
}

export default Footer
