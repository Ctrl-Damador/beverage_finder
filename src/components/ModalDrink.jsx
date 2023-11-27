import { Modal, Image } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"

const ModalDrink = () => {

    const { modal, handleModalClick } = useDrinks()


  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo de Modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalDrink