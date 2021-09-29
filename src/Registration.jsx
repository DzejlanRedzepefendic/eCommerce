import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      fullName: '',
      dateOfBirth: '',
      controls: ['email', 'password', 'fullName', 'dataOfBirth'],
      errors: {
        email: [],
        password: [],
        fullName: [],
        dateOfBirth: [],
      },
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
                type='text'
                id='email'
                className='form-control'
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value }, this.validate)
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
                  this.setState({ password: event.target.value }, this.validate)
                }}
              />
            </div>
          </div>
          {/* password ends */}

          {/* fullName starts */}
          <div className='form-group form-row'>
            <label className='col-lg-4 col-form-label' htmlFor='fullName'>
              Full Name
            </label>
            <div className='col-lg-8'>
              <input
                type='text'
                id='fullName'
                className='form-control'
                value={this.state.fullName}
                onChange={(event) => {
                  this.setState({ fullName: event.target.value }, this.validate)
                }}
              />
            </div>
          </div>
          {/* fullName ends */}

          {/* dateOfBirth starts */}
          <div className='form-group form-row'>
            <label className='col-lg-4 col-form-label' htmlFor='dateOfBirth'>
              Date of Birth
            </label>
            <div className='col-lg-8'>
              <input
                type='date'
                id='dateOfBirth'
                className='form-control'
                value={this.state.dateOfBirth}
                onChange={(event) => {
                  this.setState(
                    { dateOfBirth: event.target.value },
                    this.validate
                  )
                }}
              />
            </div>
          </div>
          {/* dateOfBirth ends */}

          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-right'>
                <button
                  className='btn btn-success m-2'
                  onClick={this.onRegisterClick}
                >
                  Register
                </button>
              </div>

              <ul className='text-danger'>
                {Object.keys(this.state.errors).map((control) => {
                  return this.state.errors[control].map((err) => {
                    return <li key={err}>{err}</li>
                  })
                })}
              </ul>

              <div>{JSON.stringify(this.state.errors)}</div>
            </div>
          </div>
        </div>
      </div>
    )
  } //end of render

  validate = () => {
    const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    let errors = {}

    //reading each control from 'controls' array
    this.state.controls.forEach((control) => {
      errors[control] = []

      switch (control) {
        case 'email':
          //email can't be blank
          if (!this.state[control]) {
            errors[control].push("Email can't be blank")
          }

          //checking email reg exp
          if (this.state.email) {
            if (!validEmailRegex.test(this.state[control])) {
              errors[control].push('Proper email address is expected')
            }
          }
          break

        default:
          break
      }
    })

    //set errors
    this.setState({ errors })
  }
}
