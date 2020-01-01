import React, { Component } from 'react'

class FirstCounter extends Component {
  render() {
    const {count , incre} = this.props;
    return <button onClick={incre}>Clicked {count} times </button>
  }
}


export default FirstCounter