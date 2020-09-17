import React, { Component } from "react";
import logo from "../image/logo.png";
import Cart from "./Cart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: Cart,
      selectedItems: props.selectedItems,
      showCart: "",
    };
  }
  alert = () => {
    alert(`    Your order has been processed.
            THANKS FOR CHOOSING US!!! 
    `);
    {
      window.location.reload();
    }
  };
  showCart = () => {
    this.setState({
      showCart: this.state.showCart ? !"false" : "true",
    });
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="brand">
            <img className="logo" src={logo} alt="Mauricio logo" />
          </div>

          <div className="search">
            <form action="#" method="get" className="search-form active">
              <input
                type="search"
                ref="searchBox"
                placeholder="Search for Product Name"
                className="search-keyword"
                onChange={this.props.filter}
                value={this.props.value}
              />
            </form>
          </div>

          <div className="cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>{this.props.counter === 0 ? "" : "Items:"}</td>
                    <td></td>
                    <td>
                      <strong>
                        {this.props.counter === 0 ? "" : this.props.counter}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>{this.props.counter === 0 ? "" : "Sub Total: "}</td>
                    <td></td>
                    <td>
                      <strong>
                        {this.props.total === 0 ? "" : "€" + this.props.total}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a className="cart-icon" href="#">
              <i
                onClick={this.showCart}
                className="fas fa-shopping-cart tada"
              />
              {this.props.counter > 0 ? (
                <span className="cart-count">{this.props.counter}</span>
              ) : (
                ""
              )}
            </a>
            <div
              className={
                this.state.showCart ? "cart-preview active" : "cart-preview "
              }
              ref="cartPreview"
            >
              <Cart selectedItems={this.props.selectedItems} />

              <div className="action-block">
                <div className="total">
                  <div>
                    <span>{this.props.counter === 0 ? "" :" Items:  "}</span>
                    <strong>
                      {this.props.counter === 0 ? "" :" " +  this.props.counter}
                    </strong>
                  </div>
                  <div>
                    <span>{this.props.counter === 0 ? "" : "Sub Total: "}</span>
                    <strong>
                      {this.props.total === 0 ? "" : "€" + this.props.total}
                    </strong>
                  </div>
                  <div>
                    <span>{this.props.counter === 0 ? "" : "Total: "}</span>
                    <strong>
                      {this.props.total === 0 ? "" : "€" + this.props.total}
                    </strong>
                  </div>
                </div>

                <button
                  type="button"
                  className={
                    this.props.selectedItems.length > 0 ? " " : "disabled"
                  }
                  onClick={this.alert}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
