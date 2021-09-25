import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/#'>
              eCommerce
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {!this.props.isLoggedIn ? (
                  <li className='nav-item'>
                    <NavLink
                      to='/'
                      className='nav-link'
                      activeClassName='active'
                      exact={true}
                    >
                      Login
                    </NavLink>
                  </li>
                ) : (
                  ''
                )}
                {this.props.isLoggedIn ? (
                  <li className='nav-item'>
                    <NavLink
                      to='/customers'
                      className='nav-link'
                      activeClassName='active'
                    >
                      Customers
                    </NavLink>
                  </li>
                ) : (
                  ''
                )}
                {this.props.isLoggedIn ? (
                  <li className='nav-item'>
                    <NavLink
                      to='/carts'
                      className='nav-link'
                      activeClassName='active'
                    >
                      Shopping Cart
                    </NavLink>
                  </li>
                ) : (
                  ''
                )}
                {this.props.isLoggedIn ? (
                  <li className='nav-item'>
                    <NavLink
                      to='/dashboard'
                      className='nav-link'
                      activeClassName='active'
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBar
