import React, { Component } from 'react'
import Product from './Product'
export default class ShoppingCart extends Component {
  state = {
    products: [],
  }

  render() {
    return (
      <div>
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

  componentDidMount = async () => {
    document.title = 'ShoppingCart - eCommerce'
    var promise = await fetch('http://localhost:5000/products', {
      method: 'GET',
    })
    var result = await promise.json()
    this.setState({ products: result })
  }
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
