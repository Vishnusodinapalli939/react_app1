import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form Handling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Form Data</h4>
        <img src={props.src} alt="img"/>
        <p>Name:{props.user}</p>
        <p> Email:{props.email}</p>
        <p>Mobile No:{props.mobile}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;