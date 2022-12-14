import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CartModal({ cart }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function navigateTo() {
    navigate("/checkout");
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-dark">
        <BsFillCartFill style={{ fontSize: "1.5rem" }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>List of products</p>
          {cart.length > 0 &&
            cart.map((item, id) => {
              return (
                <div key={id}>
                  <span>
                    <img
                      src={item.img}
                      style={{ width: "50px", padding: "0 5px" }}
                    />
                  </span>
                  <span>{item.name} - </span>
                  <span>${item.price} -</span>
                  <span>{item.quantity} 0</span>
                </div>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => navigateTo()}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
