import React, { useState } from "react";

const ProductItem = (props) => {
  const { id, name, image, price, inventory, category } = props.info;
  const [qt, setQt] = useState(1);

  let add = () => {
    props.ac(props.info);
  };

  let openModal = () => {
    props.modal(name, id, price, image);
  };

  return (
    <div className="product" key={id}>
      <div className="product-image">
        <img onClick={openModal} src={image} alt={name} />
      </div>
      <h3 className="product-name">{name}</h3>
      <h5 className="product-price">{price}</h5>
      <div className="stepper-input">
        <a
          href="#"
          className="decrement"
          onClick={(e) => {
            e.preventDefault();
            if (qt <= 1) {
              return qt;
            } else {
              setQt(qt-1);
            }
          }}
        >
          –
        </a>
        <input
          type="number"
          className="quantity"
          value={qt} /*onChange={props.feed.bind(this)}*/
        />
        <a
          href="#"
          className="increment"
          onClick={(e) => {
            e.preventDefault();
            setQt(qt + 1);
          }}
        >
          +
        </a>
      </div>
      <div className="product-action">
        <button
          className={inventory > 0 ? " " : "disabled"}
          onClick={add}
          disabled={inventory === "0"}
        >
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
