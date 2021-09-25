import React, { Component } from 'react'
import NavBar from './NavBar'
import ShoppingCart from './ShoppingCart'
import Login from './Login'
import CustomersList from './CustomersList'
import Dashboard from './Dashboard'
import NoMatchPage from './NoMatchPage'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import history from './history'
import SideBar from './Sidebar'
import ProductById from './ProductById'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }
  render() {
    return (
      <Router history={history}>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3'>
              {this.state.isLoggedIn ? <SideBar></SideBar> : ''}
            </div>

            <div className='col-lg-9'>
              <Switch>
                <Route
                  path='/'
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/customers' exact component={CustomersList} />
                <Route path='/cart' exact component={ShoppingCart} />
                <Route path='/product/:id' exact component={ProductById} />
                <Route path='*' component={NoMatchPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }

  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status })
  }
}
