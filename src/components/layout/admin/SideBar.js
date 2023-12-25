import { Link, useLocation } from "react-router-dom";
import styles from "./SideBar.module.scss";

const SideBar = (props) => {
  // de hook provided  by react router dom 3shan tediny ellocation ka object leeh prop esmaha(pathname)
  const location = useLocation();

  return (
    <aside
      className={`${styles["side-bar"]} ${props.open ? styles.open : null}`}
    >
      <div className={styles["user-info-container"]}>
        <div className={styles["image-container"]}>
          <img
            src="https://placehold.co/100x100"
            className={styles["side-bar-logo"]}
          />
        </div>
        <p className={styles.email}>someone@example.com</p>
      </div>
      <ul className={styles["links-container"]}>
        <li className={location.pathname === "/admin" ? styles.active : ""}>
          <Link to={"/admin"} className={styles.tab}>
            Dashboard
          </Link>
        </li>
        <li
          className={
            location.pathname === "/admin/users" ||
            location.pathname === "/admin/users/new"
              ? styles.active
              : ""
          }
        >
          <Link to={"/admin/users"} className={styles.tab}>
            Users
          </Link>
        </li>
        <li
          className={
            location.pathname === "/admin/products" ? styles.active : ""
          }
        >
          <Link to={"/admin/products"} className={styles.tab}>
            Products
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
