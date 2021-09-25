import React, { Component } from 'react'
import NavBar from './NavBar'
import ShoppingCart from './ShoppingCart'
import Login from './Login'
import CustomerList from './CustomersList'
import Dashboard from './Dashboard'
import NoMatchPage from './NoMatchPage'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className='container-fluid'>
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
            <Route path='/customers' exact component={CustomerList} />
            <Route path='/cart' exact component={ShoppingCart} />
            <Route path='*' exact component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status })
  }
}
