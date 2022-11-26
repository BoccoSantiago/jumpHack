import "./product.css";
import React from "react";

const ProductCard = ({ product, setCart, cart }) => {
  const removeItemById = (itemID, array) => {
    const arrayWithoutRemovedItem = array.filter((item) => item.id !== itemID);
    console.log(arrayWithoutRemovedItem);
    return setCart(arrayWithoutRemovedItem);
  };

  const newArray = [...cart];
  return (
    <div className="product-card-item">
      <img className="product-image" src={product.img} alt="img" />
      <p className="product-category">{product.type}</p>
      <div className="product-info">
        <p>{product.name}</p>
        <p>{product.price} u.m</p>
      </div>
      <div className="buttons-display-box">
        <button
          onClick={() => {
            removeItemById(product.id, cart);
            console.log(cart);
          }}
          className="cart-button-remove"
        >
          -
        </button>
        <button
          onClick={() => {
            newArray.push(product);
            setCart(newArray);
            console.log(cart.length);
          }}
          className="cart-button-add"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
