import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faClock,
  faUser,
  faLink,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ item }) {
  return (
    <div className={styles.card}>
      <h3>{item.title}</h3>
      <p>
        <FontAwesomeIcon icon={faList} className={styles.icon} />
        {item.category}
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} className={styles.icon} />
        {item.duration}
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {item.develop}
      </p>
      <p>
        <FontAwesomeIcon icon={faLink} className={styles.icon} />
        <a
          href={item.url}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.link}
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faCode} className={styles.icon} />
        {item.code}
      </p>
    </div>
  );
}

export default ProjectCard;
