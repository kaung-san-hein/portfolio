import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <h3>
        <FontAwesomeIcon icon={faSmile} />
        You can hire me!
        <FontAwesomeIcon icon={faSmile} />
      </h3>
      <div className={styles.linkContainer}>
        <a href="https://www.youtube.com/channel/UCOFTCb6iJgqffcU1_9xgqpA">
          <FontAwesomeIcon icon={faYoutube} />
        </a>{" "}
        <a href="https://github.com/kaung-san-hein">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
