import React, { Component } from 'react';
import WithCounter from './withCounter';


class HoverCounter extends Component {

  render () {
    return(
      <h1 onMouseOver={this.props.incrementCount}>Click {this.props.count} times</h1>
    )
  }

}

export default WithCounter(HoverCounter)