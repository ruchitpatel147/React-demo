import React , { Component } from 'react';
//import RegularComponent from './RegularComp';
//import PureComponent from './PureComponent';
import MemoComponent from './MemComponent';

class ParentComp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: "Hello"
    }
  }

  componentDidMount () {
    setInterval(()=> {
      this.setState({
        name: "Bye"
      })
    }, 2000)
  }

  render () {
    console.log('Inside Parent component');
    return (
      <div>
        parent Component
        <MemoComponent name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp