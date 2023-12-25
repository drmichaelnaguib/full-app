import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../services/api-service";

// const dummyProducts = [
//   {
//     id: Math.random(),
//     name: "Product1",
//     info: "flatShoes",
//     pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Satin_shoes_-_DPLA_-_52596009b0a7365b85ea1f558927bbca_%28page_1%29.jpg/800px-Satin_shoes_-_DPLA_-_52596009b0a7365b85ea1f558927bbca_%28page_1%29.jpg?20220719064643",
//   },
//   {
//     id: Math.random(),
//     name: "Product2",
//     info: "dresses",
//     pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Christian_Dior_evening_gown_called_%22Z%C3%A9mire%22%2C_Fall-Winter_1954_02.jpg/640px-Christian_Dior_evening_gown_called_%22Z%C3%A9mire%22%2C_Fall-Winter_1954_02.jpg",
//   },
//   {
//     id: Math.random(),
//     name: "Product3",
//     info: "jeans",
//     pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Angels-jeans-cici-indigo-denim-used-dark.jpg/640px-Angels-jeans-cici-indigo-denim-used-dark.jpg",
//   },
// ];
const ProductsList = () => {
  const navigate = useNavigate();
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
                  <Button variant="outline-primary">Show</Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => {
                      navigate(`/admin/products/${product.id}/edit`);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="outline-danger">Delete</Button>
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
