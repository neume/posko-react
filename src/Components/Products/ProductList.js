import React from 'react'
import DataSource from '../../DataSource'

import Product from './Product'


export default class ProductList extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount = async () => {
    let result = await DataSource.getProducts()
    this.setState({
      products: result
    })
  }

  renderProducts = () => {
    return(this.state.products.map(product => {
      return (
        <div>
          <Product key={product.id} object={product} />
          <hr/>
        </div>
      )
    }))
  }

  render() {
    return(
      <div>
        <h2> Products </h2>
        { this.renderProducts() }
      </div>
    )
  }
}