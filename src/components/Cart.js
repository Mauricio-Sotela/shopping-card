import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let selectedItem;

    {
      if (this.props.selectedItems.length > 0) {
        selectedItem = this.props.selectedItems.map((item) => {
          return (
            <li className="cart-item">
              <img className="product-image" src={item.image} />
              <div className="product-info">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">1 No. </p>
                <p className="amount">48</p>
              </div>
              <a className="product-remove" href="#"
              onClick={(e)=>{
                  e.preventDefault()
                  e.target.parentNode.remove()
              }}>
                ×
              </a>
            </li>
          );
        });
      } else {
        selectedItem = (
          <div className="empty-cart">
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png"
              alt="empty-cart"
            />
            <h2>You cart is empty!</h2>
          </div>
        );
      }
    }

    return (
      <div>
        <ul className="cart-items">{selectedItem}</ul>
      </div>
    );
  }
}

export default Cart;
