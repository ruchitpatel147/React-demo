import React, { Component } from 'react';

const UpdateComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor (props) {
      super(props)
      this.state = {
        count: 0
      }
    }
    counter = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }

    render () {
      return <OriginalComponent name='Test' count={this.state.count} incrementCount ={this.counter} {...this.props}/>
    }
  }

  return NewComponent

}


export default UpdateComponent