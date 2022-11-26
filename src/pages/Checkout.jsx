import React from "react";
import { Button } from "react-bootstrap";
import "./Checkout.css";
import ModalCheckout from "../components/ModalCheckout/ModalCheckout";

export default function Checkout({ cart }) {
  const price = cart.reduce((acc, a) => acc + a.price, 0);
  console.log(price);
  return (
    <div className="check-container">
      <div className="check-text-container">
        <h1 style={{ textAlign: "center" }}>Checkout</h1>
        <div>
          <p style={{ textAlign: "center" }}>List de Productos</p>
          {cart.map((item, index) => (
            <div key={index}>
              <ul>
                <li>Producto: {item.name}</li>
                <li>Precio: {item.price}</li>
              </ul>
            </div>
          ))}
          <h3 style={{ textAlign: "right" }}>Total: {price}</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <ModalCheckout />
        </div>
      </div>
    </div>
  );
}
