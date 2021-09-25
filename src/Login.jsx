import React, { Component } from 'react'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
  }
  render() {
    return (
      <div>
        <h4 className='m1 p-2 border-bottom'>Login</h4>
        {/*Email starts */}
        <div className='form-group form-row'>
          <label className='col-lg-4'>Email:</label>
          <input
            type='text'
            className='form-control'
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value })
            }}
          />
        </div>
        {/*Email ends */}
        {/*Password starts */}
        <div className='form-group form-row'>
          <label className='col-lg-4'>Password:</label>
          <input
            type='password'
            className='form-control'
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value })
            }}
          />
        </div>
        {/*Password ends */}
        <div className='text-right'>
          <button className='btn btn-primary' onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    )
  } // end of render

  onLoginClick = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: 'GET' }
    )
    var data = await response.json()
    if (data.length > 0) {
      window.alert('Success')
      this.props.updateIsLoggedInStatus(true)
    } else {
      window.alert('Error')
    }
  }
}
