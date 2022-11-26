import React, { useState } from "react";
import "./ProductList.css";
import ProductCard from "../components/ProductCard/ProductCard";
//import ApiCall from "../components/API/ApiCall";

const singleProduct = {
  id: 1,
  name: "Aceite",
  type: "Beverage",
  price: 400,
  cusine: "Thai",
  img: "https://www.lechepuleva.es/documents/13930/203222/aceite_oliva_g.jpg",
};
const singleProduct2 = {
  id: 2,
  name: "Sopa",
  type: "Food",
  price: 300,
  cusine: "Thai",
  img: "https://www.despensa.es/documents/10180/10736/320212_G.jpg",
};
const singleProduct3 = {
  id: 3,
  name: "Arroz",
  type: "Food",
  price: 200,
  cusine: "Thai",
  img: "https://cazaclientes.es/wp-content/uploads/2019/12/arroz-basmati-aromatico-hacendado-mercadona-1.jpg",
};
const singleProduct4 = {
  id: 4,
  name: "Fideos",
  type: "Food",
  price: 100,
  cusine: "Thai",
  img: "https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/spain/custom/product-images/70-es-684367/spaghetti_knorr_producto.jpg",
};
const products = [
  singleProduct,
  singleProduct2,
  singleProduct3,
  singleProduct4,
];

console.log(products);

const ProductList = ({ cart, setCart }) => {
  return (
    <>
      <h2 className="heading-product-list">Product List Page</h2>
      <div className="product-list-view">
        {/*  <ApiCall /> */}
        <div className="product-list-box">
          {products.map((product, index) => (
            <ProductCard
              cart={cart}
              setCart={setCart}
              product={product}
              key={`${product.name}_${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
