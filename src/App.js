import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Modal from "./components/Modal";
import Cart from "./components/Cart"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      filteredData: [],
      selectedItem: [],
      counter: 0,
      itemsID: [],
      prices: [],
      total: 0,
      quantity: 1,
      filter: "",
      title: "All Products",
      zoomProduct: {},
      modalActive: false,
      selectedProduct: {},
    };
    this.handler = this.handler.bind(this); /**using bind */
  }
  addToCart = (image, name, price, id, quantity) => {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
        },
      },
      function () {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
  };
  // Open Modal
  openModal = (name, id, price, image) => {
    this.setState({
      zoomProduct: {
        image: image,
        price: price,
        id: id,
        name: name,
      },
      modalActive: true,
    });
  };
  // Close Modal
  closeModal = () => {
    this.setState({
      modalActive: false,
    });
  };
  vegetables = (x) => {
    this.setState({
      data: Data.filter((item) => {
        if (item.category === "vegetables") {
          return item;
        }
      }),
      title: "Vegetables",
    });
  };
  nuts = (x) => {
    this.setState({
      data: Data.filter((item) => {
        if (item.category === "nuts") {
          return item;
        }
      }),
      title: "Nuts",
    });
  };
  fruits = () => {
    this.setState({
      data: Data.filter((item) => {
        if (item.category === "fruits") {
          return item;
        }
      }),
      title: "Fruits",
    });
  };
  clothes = () => {
    this.setState({
      data: Data.filter((item) => {
        if (item.category === "clothes") {
          return item;
        }
      }),
      title: "Clothes",
    });
  };
  all = () => {
    this.setState({
      data: Data,
      title: "All Products",
    });
  };

  increment = (e) => {
    e.preventDefault();
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  decrement = (e) => {
    e.preventDefault();
    if (this.state.quantity <= 1) {
      return this.state.quantity;
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };
  totalSum = (x) => {
    if (this.state.prices.length > 0) {
      return this.setState({
        total: [
          x.price +
            this.state.prices.reduce((a, b) => {
              return a + b;
            }),
        ],
      });
    } else {
      return this.setState({
        total: x.price,
      });
    }
  };
  idFinder = (id, x) => {
    if (id.includes(x.id)) {
      // console.log("igual");

      return this.setState({
        counter: this.state.counter,
      });
    } else {
      // console.log("no igual");
      return this.setState({
        counter: this.state.counter + 1,
      });
    }
  };
  handler(x) {
    // console.log(this.state.selectedItem);

    this.setState({
      selectedItem: [
        ...this.state.selectedItem.filter((item) => {
          if (item.id !== x.id) {
            return item;
          }
        }),
        x,
      ], 
      itemsID: [...this.state.itemsID, x.id],
      prices: [...this.state.prices, x.price],
      quantity: 1,
      // total:this.state.total+ x.price
    });
    this.idFinder(this.state.itemsID, x);
    this.totalSum(x);
    // console.log(this.state.prices);

    // console.log(this.state.selectedItem);
  }

  submitHandle = (e) => {
    this.setState({
      userInput: e.target.value.trim(),
    });

    e.preventDefault();
    const userText = this.state.userInput;
    // console.log(userText);

    let newArr = this.state.data.filter((item) => {
      if (item.name.toLocaleLowerCase().includes(userText)) {
        return item;
      }
    });
    // console.log(newArr);

    this.setState({
      filteredData: newArr,
    });
    // console.log(this.state.filteredData);
  };

  render() {
    return (
      <React.Fragment>
        <Header
          addToCart={this.addToCart}
          filter={this.submitHandle}
          value={this.state.userInput}
          counter={this.state.counter}
          total={this.state.total}
          selectedItems={this.state.selectedItem}
          changeName={this.changeName}
        />

        <div className="products-wrapper">
          <FilterBar
            nuts={this.nuts}
            fruits={this.fruits}
            vegetables={this.vegetables}
            clothes={this.clothes}
            all={this.all}
            title={this.state.title}
          />
          <ProductList
            data={
              this.state.userInput ? this.state.filteredData : this.state.data
            }
            action={this.handler}
            increment={this.increment}
            decrement={this.decrement}
            quantity={this.state.quantity}
            openModal={this.openModal}
          />
          <Modal
            product={this.state.zoomProduct}
            openModal={this.state.modalActive}
            closeModal={this.closeModal}
          />
         
        </div>
      </React.Fragment>
    );
  }
}
