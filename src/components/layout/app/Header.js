import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => {
    return state.cart;
  });

  return (
    <header className={styles.header}>
      <Link to="/" className={styles["website-title-link"]}>
        <h1>Shop</h1>
      </Link>

      <div className={styles["navigation-links"]}>
        <Link to="/admin">Admin Panel</Link>
      </div>

      <button
        type="button"
        className={styles.button}
        onClick={() => {
          navigate("/cart");
        }}
      >
        <FaShoppingCart />
        <div className={styles["cart-items"]}>{cartState.totalQty}</div>
      </button>
    </header>
  );
};

export default Header;
