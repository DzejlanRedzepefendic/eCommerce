import React, { Component } from 'react'
import Product from './Product'
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: 'Iphone', price: 800, quantity: 0 },
      { id: 2, productName: 'Sony Camera', price: 1800, quantity: 0 },
      { id: 3, productName: 'Samsung QLED TV', price: 2800, quantity: 0 },
      { id: 4, productName: 'IPad Pro', price: 1800, quantity: 0 },
      { id: 5, productName: 'Xbox', price: 1000, quantity: 0 },
      { id: 6, productName: 'Dell Monitor', price: 600, quantity: 0 },
    ],
  }

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((product) => {
            return <Product />
          })}
        </div>
      </div>
    )
  }
}
