import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["links-container"]}>
        <Link to="">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <h3>ALL RIGHTS RESERVED</h3>
    </footer>
  );
};

export default Footer;
