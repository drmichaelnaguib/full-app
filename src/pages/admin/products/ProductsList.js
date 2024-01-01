import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../services/api-service";
import { useDispatch } from "react-redux";

const ProductsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states
  const [products, setProducts] = useState([]);

  // use effect runs after rendering the component to prevent re-rendering after changing the state
  // (handles the side effects in react because: changing state always causes re-rendering of the component
  // &its child components)
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
          setProducts(mappedProducts);
        }
      }
    });
  }, []);

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="link"
          onClick={() => {
            navigate("/admin/products/new");
          }}
        >
          Add New Product
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Info</th>
            <th>Pic</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.info}</td>
                <td>
                  <img
                    style={{
                      border: "1px solid black",
                      width: "30px",
                      height: "30px",
                    }}
                    src={product.pic}
                  />
                </td>
                <td>
                  <Button variant="outline-primary" size="sm">
                    Show
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => {
                      navigate(`/admin/products/${product.id}/edit`);
                    }}
                    size="sm"
                    className="mx-2"
                  >
                    Edit
                  </Button>
                  <Button variant="outline-danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default ProductsList;
