import React from 'react'


export default class User extends React.Component {
  render() {
    return(
      <div>
        <div>
          { this.props.object.id } {this.props.object.first_name}
        </div>
      </div>
    )
  }
}
