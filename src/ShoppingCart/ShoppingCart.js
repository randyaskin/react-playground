import React, { Component } from 'react';
import './ShoppingCart.css';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  static defaultProps = {
    items: []
  }

  deleteItem = (id) => {
    this.props.onItemDelete(id);
  }

  toggleEditMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleEditMode}>{this.state.editMode ? 'Done' : 'Edit'}</button>
        <ul className="shoppingCart">
          {this.props.items.map(item => {
            return (
              <li key={item.id} className="item">
                <div className="item__left">
                  <img className="item__image" src="http://via.placeholder.com/50x50" alt="avatar"/>
                  <div>
                    {item.name}<br/>
                    <a href={"tel:" + item.price}>{item.price}</a>
                  </div>
                </div>
                <div className="item__right">
                  {this.state.editMode && <button onClick={this.deleteItem.bind(this, item.id)}>Delete</button>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
