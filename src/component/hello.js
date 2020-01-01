import React , { Component }  from 'react'


class Hello extends Component {

  constructor () {
    super()
    this.state = {
      message: "Welcome"
    }
  }
  clickMe = () => {
    this.setState({
      message: "Thank you"
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick = {() => this.clickMe()}>Click me</button>
      </div>
    )
  }
}

export default Hello