import React, { Component } from 'react';
import WithCounter from './withCounter';


class ClickCounter extends Component {

  render () {
    return(
      <button onClick={this.props.incrementCount}>Click {this.props.count} times</button>
    )
  }

}

export default WithCounter(ClickCounter)