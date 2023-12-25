import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";
import SideBar from "./SideBar";
import { Fragment, useState } from "react";
import { FiList } from "react-icons/fi";

const RootLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const sideBarHandler = () =>
    setSideBarOpen((prevState) => {
      return !prevState;
    });

  return (
    <Fragment>
      <SideBar open={sideBarOpen} />
      <main
        className={`${styles["panel-content"]} ${
          sideBarOpen ? styles["side-bar-open"] : null
        }`}
      >
        <button className={styles["side-bar-toggler"]} onClick={sideBarHandler}>
          <FiList />
        </button>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
