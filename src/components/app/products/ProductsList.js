import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
// import styles from "./ProductsList.module.scss";
import { Fragment, useEffect, useState } from "react";
import { sendRequest } from "../../../services/api-service";

const ProductsList = () => {
  const [productCardFill, setProductCardFill] = useState([]);
  useEffect(() => {
    sendRequest("products.json", "GET").then((res) => {
      if (res) {
        let mappedProducts = [];
        for (let productId in res) {
          mappedProducts.push({
            id: productId,
            name: res[productId].name,
            info: res[productId].info,
            pic: res[productId].pic,
          });
        }
        setProductCardFill(mappedProducts);
      }
    });
  }, []);

  return (
    // <div className={styles["products-list"]}>
    <Fragment>
      <Row>
        {productCardFill.map((product) => {
          return (
            <Col md="3" sm="6" key={product.id}>
              <ProductCard productCardFill={product} />
            </Col>
          );
        })}
      </Row>
      {/* bootstrap bey2assem ay container 12 column, e7na ben7otohom fel container beta3o eli esmo row 3shan yedy
      display flex */}
      {/* <Row>
        <Col style={{ height: "200px" }} md="6">
          <div className="h-100 w-100" style={{ backgroundColor: "red" }}></div>
        </Col>
        <Col style={{ height: "200px" }} md="6">
          <div
            className="h-100 w-100"
            style={{ backgroundColor: "blue" }}
          ></div>
        </Col>
      </Row> */}
    </Fragment>
    // </div>
  );
};
export default ProductsList;
