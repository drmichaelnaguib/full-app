import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.scss";
import { cartReduxActions } from "../../../redux/slices/cart-slice";
import { getFirstProductImg } from "../../../services/product-service";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartReduxActions.addItem({
        product: props.productCardFill,
      })
    );
  };

  return (
    <div className={styles["card-outer-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["image-container"]}>
          <img src={getFirstProductImg(props.productCardFill)} />
          <button
            type="button"
            className={styles["add-to-cart-btn"]}
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
      <p className={styles["product-name"]}>{props.productCardFill.name}</p>
    </div>
  );
};

export default ProductCard;
