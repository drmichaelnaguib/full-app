import { sendRequest } from "../../services/api-service";
import { productReduxActions } from "../slices/product-slice";

const getProductsList = () => {
  return async (dispatch) => {
    const url = "products.json";
    const response = await sendRequest(url, "GET");
    let mappedProducts = [];
    for (let productId in response) {
      mappedProducts.push({
        id: productId,
        name: response[productId].name,
        info: response[productId].info,
        pics: response[productId].pics,
      });
    }

    dispatch(productReduxActions.list(mappedProducts));
    return mappedProducts;
  };
};

export { getProductsList };
