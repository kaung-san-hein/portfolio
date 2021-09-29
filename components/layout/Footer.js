import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className={styles.footer}>
            <h3><FontAwesomeIcon icon={faSmile} /> You can hire me!!! <FontAwesomeIcon icon={faSmile} /></h3>
        </div>
    )
}

export default Footer;