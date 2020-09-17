import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const acc = props.action;
  const items = props.data.map((item) => {
    if (props.data.length > 1) {
      return (
        <ProductItem
          info={item}
          ac={acc}
          increment={props.increment}
          decrement={props.decrement}
          quantity={props.quantity}
          modal={props.openModal}
        />
      );
    } else {
      return <h3>No Products Found </h3>;
    }
  });
  return <div className="products">{items}</div>;
};

export default ProductList;
