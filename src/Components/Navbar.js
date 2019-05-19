import React from 'react'
import axios from 'axios'
import config from '../config'
export default class Navbar extends React.Component {
  signOut = () => {
    axios({
      method: 'delete',
      url: `${config.url}/sign_out`
    }).then(() => {
      window.location = '/'
    })
  }
  render() {
    return(
      <div>
        <button onClick={this.signOut}> Sign Out</button>
      </div>
    )
  }
}