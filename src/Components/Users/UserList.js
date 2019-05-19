import React from 'react'
import DataSource from '../../DataSource'

import User from './User'


export default class UserList extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount = async () => {
    let result = await DataSource.getUsers()
    this.setState({
      users: result
    })

    let products = await DataSource.getProducts()
    console.log(products)
  }

  renderUsers = () => {
    return(this.state.users.map(user => {
      return <User key={user.id} object={user} />
    }))
  }

  render() {
    return(
      <div>
        <h2> Users </h2>
        { this.renderUsers() }
      </div>
    )
  }
}