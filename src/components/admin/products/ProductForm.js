import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { sendRequest } from "../../../services/api-service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [productData, setProductData] = useState({
    name: "",
    info: "",
    pic: "",
  });

  const inputHandler = (fieldName, event) => {
    setProductData((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  useEffect(() => {
    if ("productId" in params) {
      sendRequest(`products/${params.productId}.json`, "GET").then((res) => {
        if (res) {
          setProductData({ ...res });
        }
      });
    }
  }, []);

  const productFormHandler = (e) => {
    e.preventDefault();
    if ("productId" in params) {
      sendRequest(
        `products/${params.productId}.json`,
        "PATCH",
        productData
      ).then((res) => {
        if (res) {
          navigate("/admin/products");
        }
      });
    } else {
      sendRequest("products.json", "POST", productData).then((res) => {
        if (res) {
          navigate("/admin/products");
        }
      });
    }
  };

  return (
    <Form onSubmit={productFormHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Product Name"
          onChange={inputHandler.bind(this, "name")}
          value={productData.name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Info</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Product Info"
          onChange={inputHandler.bind(this, "info")}
          value={productData.info}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product pic</Form.Label>
        <Form.Control
          type="text"
          placeholder="Place your Pic URL"
          onChange={inputHandler.bind(this, "pic")}
          value={productData.pic}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default ProductForm;
