import React, { Component } from 'react';
import LifeCycleB from './lifeCycleB';


class LifeCycleA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: "Hello"
    }
    console.log('Life cycle A Inside constructor');
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Life cycle A inside getDerivedState from props');
    return null;
  }

  componentDidMount () {
    console.log('Life cycle A Inside component did mount ');
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('Life cycle A should component update method')
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Life cycle A snap shot before update')
    return null;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('Life cycle A component did update')
  }

  componentDidCatch (error, errorInfo) {
    console.log('Life cycle A Did catch');
  }

  clickMe = () => {
    this.setState({
      name: "Update"
    })
  }

  render () {
    console.log('Life cycle A Inside render');
    return (
    <div>
      <div>Hello A</div>
      <button onClick={this.clickMe}>Change state</button>
      <LifeCycleB/>
    </div>
    )
  }
}

export default LifeCycleA