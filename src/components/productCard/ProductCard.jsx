import "./product.css";
import React from "react";

const ProductCard = ({ product, setCart, cart }) => {
  const removeItemById = (itemID, array) => {
    const arrayWithoutRemovedItem = array.filter((item) => item.id !== itemID);
    console.log(arrayWithoutRemovedItem);
    return setCart(arrayWithoutRemovedItem);
  };

  const addToCart = (id) => {
    if (product.id === id) {
      if (newArray.indexOf(product) > -1) {
        product.quantity++;
      } else {
        newArray.push(product);
        product.quantity = 1;
      }
    }

    setCart(newArray);
    console.log(cart.length);
  };

  /*  function addToCart(id) {
    for (let item of cart) {
      if (item.id === id) {
        if (cart.indexOf(item) > -1) {
          item.quantity++;
        } else {
          cart.push(item);
          item.quantity = 1;
        }
        console.log(cart.indexOf(item) > -1);
        console.log(cart.length);
        console.log(cart);
      }
    }
  } */

  const newArray = [...cart];
  console.log("new", newArray);
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
          className="cart-button-add"
          onClick={() => addToCart(product.id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
