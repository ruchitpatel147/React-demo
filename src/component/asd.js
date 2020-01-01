import React , { Component }  from 'react'
import { Button } from 'reactstrap';

class Count extends Component {

  constructor () {
    super()
    this.state = {
      count: 0
    }
  }
  clickMe = () => {
    /*this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('`Callback Value`', this.state.count)
    })*/
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }

  clickFive = () => {
    this.clickMe();
    this.clickMe();
    this.clickMe();
    this.clickMe();
    this.clickMe();
  }

  render () {
    return (
      <div>
        <h1>count = {this.state.count}</h1>
        <button onClick = {() => this.clickMe()}>Click me</button>
        <Button color="danger" onClick = {() => this.clickFive()}>Increment five</Button>
      </div>
    )
  }
}

export default Count