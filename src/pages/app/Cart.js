import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { cartReduxActions } from "../../redux/slices/cart-slice";
import { getFirstProductImg } from "../../services/product-service";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const renderComponent = () => {
    if (cartState.totalQty === 0) {
      return <p>Your Cart is Empty</p>;
    } else {
      return (
        <Container className={styles["cart-product-container"]}>
          {cartState.items.map((item) => {
            return (
              <div className={styles["cart-product"]} key={item.id}>
                <div>
                  <div className={styles["image-container"]}>
                    <img src={getFirstProductImg(item)} />
                  </div>
                  <p className="text-center">{item.name}</p>
                </div>
                <div className={styles.actions}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(cartReduxActions.addItem({ product: item }));
                    }}
                  >
                    <FaPlus />
                  </button>
                  <div>{item.qty}</div>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(cartReduxActions.removeItem({ product: item }));
                    }}
                  >
                    <FaMinus />
                  </button>
                </div>
              </div>
            );
          })}
        </Container>
      );
    }
  };
  return (
    <div className={styles["cart-container"]}>
      <h1>CART</h1>
      <Container>{renderComponent()}</Container>
    </div>
  );
};
export default Cart;
