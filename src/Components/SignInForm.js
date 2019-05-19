import React from 'react'
import axios from 'axios'
import qs from 'qs';
import config from '../config'


export default class SignInForm extends React.Component {
  constructor() {
    super()
    this.state = {
      account_name: 'example',
      email: 'posko@example.com',
      password: 'posko',
    }
  }

  submit = () => {

    axios({
      method: 'post',
      url: `${config.url}/sign_in`,
      withCredentials: true,
      data: qs.stringify(this.state),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      }
    })
    .then( () => {
      window.location.href = '/dashboard'
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    this.setState({[name]: value})
  }

  render() {
    return(
    <div>
      <div>
        <label> Account Name</label>
        <input      
          type='text'
          name='account_name'
          onChange={this.handleChange}
          placeholder='Account Name' value={this.state.account_name}/>
      </div>

      <div>
        <label> Email</label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={this.handleChange}
          value={this.state.email}/>
      </div>

      <div>
        <label> Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={this.handleChange}
          value={this.state.password}/>
      </div>
      <button
        type='button'
        onClick={this.submit}>
        Sign In
      </button>
    </div>
    ) 
  }
}