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
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className='container-fluid'>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/customers' exact component={CustomerList} />
            <Route path='/cart' exact component={ShoppingCart} />
            <Route path='*' exact component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
