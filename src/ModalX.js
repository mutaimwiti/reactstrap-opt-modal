import { useContext } from "react";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import StateContext from "./StateContext";

function ModalX() {
  const {
    setState,
    state: { modal }
  } = useContext(StateContext);

  const toggle = () => {
    setState({ modal: !modal });
    setTimeout(() => {
      console.log("already closed Modal X");
    }, 1000);
  };

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>Modal X</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalX;
