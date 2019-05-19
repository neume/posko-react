import React from 'react'
import Navbar from './Navbar'
import UserList from './Users/UserList'
import ProductList from './Products/ProductList'


export default class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <div> Hello from Dashboard</div>
        <UserList/>
        <ProductList/>
      </div>
    )
  }
}