import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  static defaultProps = {
    items: [
      {
        "id": 0,
        "name": "Item 1",
        "price": "$1.00"
      },
      {
        "id": 1,
        "name": "Item 2",
        "price": "$1.00"
      },
      {
        "id": 2,
        "name": "Item 3",
        "price": "$1.00"
      },
      {
        "id": 3,
        "name": "Item 4",
        "price": "$1.00"
      },
      {
        "id": 4,
        "name": "Item 5",
        "price": "$1.00"
      }
    ]
  }

  handleDelete(id) {
    const idx = this.state.items.findIndex(item => item.id === id);
    this.setState((prevState) => ({
      items: prevState.items.filter((_, i) => i !== idx)
    }));
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <h4>Cart Filled:</h4>
          <ProgressBar max="10" value={this.state.items.length} />
          <h4>Shopping Cart:</h4>
          <ShoppingCart items={this.state.items} onItemDelete={this.handleDelete} />
        </main>
      </div>
    );
  }
}
