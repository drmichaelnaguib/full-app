import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const cartState = useSelector((state) => {
    return state.cart;
  });

  return (
    <header className={styles.header}>
      <h1>Shop</h1>
      <button type="button" className={styles.button}>
        <FaShoppingCart />
        <div className={styles["cart-items"]}>{cartState.totalQty}</div>
      </button>
    </header>
  );
};

export default Header;
