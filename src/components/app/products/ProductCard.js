import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.scss";
import { cartReduxActions } from "../../../redux/slices/cart-slice";
import { getFirstProductImg } from "../../../services/product-service";
import { Link } from "react-router-dom";

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
      <Link
        to={`/product-details/${props.productCardFill.id}`}
        className={styles["product-name"]}
      >
        {props.productCardFill.name}{" "}
      </Link>
    </div>
  );
};

export default ProductCard;
