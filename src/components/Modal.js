import React, { Component } from "react";
import { findDOMNode } from "react-dom";

class QuickView extends Component {
  constructor(props) {
    super(props);
  }
  add=()=>{
    window.alert(`Functionality on construction.
    We are sorry!!!`)
    
    
  }

  render() {
    return (
      <div
        className={
          this.props.openModal ? "modal-wrapper active" : "modal-wrapper"
        }
      >
        <div className="modal" ref="modal">
          <button
            type="button"
            className="close"
            onClick={this.props.closeModal}
          >
            &times;
          </button>
          <div className="quick-view">
            <div className="quick-view-image">
              <img
                src={this.props.product.image}
                alt={this.props.product.name}
              />
            </div>
            <div className="quick-view-details">
              <span className="product-name">{this.props.product.name}</span>
              <span >
                  <button onClick={this.add}>
                   Add to cart
                  </button>
              </span>
              <span className="product-price">{this.props.product.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickView;
