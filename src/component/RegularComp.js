import React, { Component } from 'react';


class RegComp extends Component {
  render () {
    console.log('Inside Regular component');
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp