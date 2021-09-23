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
      <div className='container-fluid'>
        <h4>Shopping Cart</h4>
        <div className='row'>
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className='btn btn-primary'>Buy Now</button>
              </Product>
            )
          })}
        </div>
      </div>
    )
  }
  // render ends
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)
    if (allProducts[index].quantity < maxValue) allProducts[index].quantity++

    this.setState({ products: allProducts })
  }
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)
    if (allProducts[index].quantity > minValue) allProducts[index].quantity--
    this.setState({ products: allProducts })
  }

  handleDelete = (product) => {
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)
    if (window.confirm('Are you sure to delete?')) allProducts.splice(index, 1)

    this.setState({ products: allProducts })
  }
}
