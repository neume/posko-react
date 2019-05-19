import React from 'react'


export default class Product extends React.Component {
  render() {
    return(
      <div>
        <div>
          <span>Name: </span>
          <span>{this.props.object.title}</span>
        </div>
        <div>
          <span>handle: </span>
          <span>{this.props.object.handle}</span>
        </div>
        <div>
          <span>Product Type: </span>
          <span>{this.props.object.product_type}</span>
        </div>
      </div>
    )
  }
}