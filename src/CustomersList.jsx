import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'Customers',
      customersCount: 5,
      customers: [],
    }
  }
  render() {
    return (
      <div>
        <h4 className='m-1 p-1'>
          {this.state.pageTitle}

          <span className='badge badge-secondary m-2'>
            {this.state.customersCount}
          </span>

          <Link
            to='/new-customer'
            className='btn btn-primary'
            onClick={this.onRefreshClick}
          >
            New Customer
          </Link>
        </h4>

        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    )
  }

  componentDidMount = async () => {
    document.title = 'Customers - eCommerce'

    let response = await fetch('http://localhost:5000/customers')
    if (response.ok) {
      let data = await response.json()
      this.setState({ customers: data, customersCount: data.length })
    } else {
      console.log('Error:' + response.status)
    }
  }
  onRefreshClick = () => {
    this.setState({ customersCount: 7 })
  }

  getPhoneToRender = (phone) => {
    if (phone) return phone
    else {
      return <div className='bg-warning p-2 text-center'>No Phone</div>
    }
  }

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt='Customer' />
            <div>
              <button
                className='btn btn-sm btn-secondary'
                onClick={() => {
                  this.onChangePictureClick(cust, index)
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <Link to={`/edit-customer/${cust.id}`}>Edit</Link>
            <button
              className='btn btn-danger'
              onClick={() => {
                this.onDeleteClick(cust.id)
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    var custArr = this.state.customers
    custArr[index].photo = 'https://picsum.photos/id/104/60'

    this.setState({ customers: custArr })
  }
  onDeleteClick = async (id) => {
    if (window.confirm('Are you sure to delete this customer?')) {
      var response = await fetch(`http://localhost:5000/customers/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        var allCustomers = [...this.state.customers]
        console.log(allCustomers)
        allCustomers = allCustomers.filter((cust) => {
          return cust.id !== id
        })
        this.setState({ customers: allCustomers })
      }
    }
  }
}
