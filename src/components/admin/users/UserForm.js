import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sendRequest } from "../../../services/api-service";
import { Button, Form } from "react-bootstrap";

const UserForm = () => {
  /**
   * Two way binding
   *    en e7na norbot el state bel form values
   */

  const navigate = useNavigate();
  const params = useParams();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    if ("userId" in params) {
      sendRequest(`users/${params.userId}.json`, "GET").then((res) => {
        setUserData({
          ...res,
          age: +res.age,
        });
      });
    }
  }, []);

  // 3shan agama3 el event.target.value men kol elinputs b function (input handler) badiha dynamic properties
  // w adiha el event as a last prop
  const inputHandler = (fieldName, event) => {
    // hena hdiha parameter callback function 3shan de state mo3tameda 3ali ablaha
    setUserData((prevState) => {
      return {
        ...prevState,
        // hena bamodify eldynamic property beta3et elobject (elfieldName)
        // bel info eli gya men elinputs fel form
        [fieldName]: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // hena bacheck eza kan elresponse bfalse, w ba3daha badiha .then tet3amel law resolved w .catch tet3amel
    // law reject
    if ("userId" in params) {
      // e7na fel edit user
      sendRequest(`users/${params.userId}.json`, "PATCH", userData)
        .then((res) => {
          if (res) {
            navigate("/admin/users");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // e7na fel new user
      sendRequest("users.json", "POST", userData)
        .then((res) => {
          if (res) {
            navigate("/admin/users");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const firstNameHandler = (e) => {
  //   setFirstName(e.target.value);
  // };
  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={inputHandler.bind(this, "firstName")}
          value={userData.firstName}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={inputHandler.bind(this, "lastName")}
          value={userData.lastName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={inputHandler.bind(this, "email")}
          value={userData.email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          onChange={inputHandler.bind(this, "age")}
          value={userData.age}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
