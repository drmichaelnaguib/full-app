import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalStyle1 = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.closeHandler}>
      <Modal.Header closeButton>
        <Modal.Title>User Display</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-between mb-4">
          <strong>First Name:</strong>
          <span>{props.user.firstName}</span>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <strong>Last Name:</strong>
          <span>{props.user.lastName}</span>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <strong>Email:</strong>
          <span>{props.user.email}</span>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <strong>Age:</strong>
          <span>{props.user.age}</span>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.closeHandler();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalStyle1;
