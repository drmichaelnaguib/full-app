import { useDispatch } from "react-redux";
import styles from "./AlertStyle1.module.scss";
import { IoIosClose } from "react-icons/io";
import { alertReduxActions } from "../../../redux/slices/alert-slice";

/**
 * Props:
 *  type: success,error,warning
 *  text
 *  open
 */
const AlertStyle1 = (props) => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(
      alertReduxActions.updateAlert({
        open: false,
        type: "",
        text: "",
      })
    );
  };

  return (
    <div
      className={`${styles.alert} ${styles[props.type]} ${
        props.open ? styles.open : ""
      }`}
    >
      <span className={styles["alert-text"]}>{props.text}</span>
      <button onClick={closeHandler} className={styles["close-btn"]}>
        <IoIosClose size={24} />
      </button>
    </div>
  );
};

export default AlertStyle1;
