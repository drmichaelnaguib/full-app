import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ModalStyle1 from "../../../components/ui/ModalStyle1";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../services/api-service";

const UsersList = () => {
  const navigate = useNavigate();
  // const returnedRes = {
  //   "1234": {
  //     firstName: "",
  //     lastName: "",
  //   },
  //   "4568": {
  //     firstName: ""
  //   }
  // }

  // for (let userId in returnedRes) {
  //   userId = 12334
  //   returnedRes[userId]
  // }

  // const person = {
  //   name: "Michael",
  //   email: "michael@gmail.com",
  //   age: 35,
  // };

  // //marc 0
  // //david 1
  // //michael 2
  // const names = ["Marc", "David", "Michael"];
  // names[0];
  // names[1];
  // names[2];

  // for (let key in person) {
  //   console.log(key);
  //   person[key]
  // }

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToBeShown, setUserToBeShown] = useState({});
  const showModalHandler = (user) => {
    setShowModal(true);
    setUserToBeShown(user);
  };

  // hena lazem n7ot elsend request f use effect
  useEffect(() => {
    sendRequest("users.json", "GET")
      .then((res) => {
        // if res is truthy, benefta7 array fady 3shan elforloop y7ot fih elusers b push method
        if (res) {
          let mappedUsers = [];
          for (let userId in res) {
            mappedUsers.push({
              id: userId,
              firstName: res[userId].firstName,
              lastName: res[userId].lastName,
              email: res[userId].email,
              age: res[userId].age,
            });
          }
          setUsers(mappedUsers);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(()=>{

    //   navigate("")
    // })
  }, []);

  const editUserHandler = (userId) => {
    sendRequest(`users/${userId}.json`, "PATCH");
  };
  const deleteUserHandler = (userId) => {
    if (window.confirm("Are You sure ?")) {
      sendRequest(`users/${userId}.json`, "DELETE").then((res) => {
        if (res !== false) {
          setUsers((prevstate) => {
            return prevstate.filter((user) => {
              return user.id != userId;
            });
          });
        }
      });
    }
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          variant="link"
          onClick={() => {
            navigate("/admin/users/new");
          }}
        >
          Add NewUser
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  {
                    <Container>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={
                          // showModalHandler.bind(this,user)
                          () => {
                            showModalHandler(user);
                          }
                        }
                      >
                        Show
                      </Button>

                      <Button
                        variant="outline-success"
                        size="sm"
                        className="mx-2"
                        onClick={() => {
                          navigate(`/admin/users/${user.id}/edit`);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={deleteUserHandler.bind(this, user.id)}
                      >
                        Delete
                      </Button>
                    </Container>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalStyle1
        showModal={showModal}
        user={userToBeShown}
        closeHandler={() => {
          setShowModal(false);
        }}
      />
    </Container>
  );
};
export default UsersList;
