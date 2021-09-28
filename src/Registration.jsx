import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      fullName: '',
      dateOfBirth: '',
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-lg-6 mx-auto'>
          <h1>Register</h1>
          {/* email starts */}
          <div className='form-group form-row'>
            <label className='col-lg-4 col-form-label' htmlFor='email'>
              Email
            </label>
            <div className='col-lg-8'>
              <input
                type='email'
                id='email'
                className='form-control'
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value })
                }}
              />
            </div>
          </div>
          {/* email ends */}
          {/* password starts */}
          <div className='form-group form-row'>
            <label className='col-lg-4 col-form-label' htmlFor='password'>
              Password
            </label>
            <div className='col-lg-8'>
              <input
                type='password'
                id='password'
                className='form-control'
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value })
                }}
              />
            </div>
          </div>
          {/* email ends */}
        </div>
      </div>
    )
  }
}
