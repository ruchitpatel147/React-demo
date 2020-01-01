import React, { Component } from 'react';


class UserGreeting extends Component {

  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render () {
    return (
      this.state.isLoggedIn ?
        <div>Welcome user</div> :
        <div>Welcome guest</div>
    )
  }

}

export default UserGreeting