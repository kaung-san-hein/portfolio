import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className={styles.container}>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> kaungsanhein2019@gmail.com
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} /> 09782696857
      </p>
      <p>
        <FontAwesomeIcon icon={faAddressCard} /> Myanmar, Mandalay
      </p>
    </div>
  );
}

export default Contact;
