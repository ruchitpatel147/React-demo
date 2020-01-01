import React, { Component } from 'react';


class LifeCycleB extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: "test"
    }
    console.log('Life cycle B Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Life cycle B get derived state from pops');
    return null;
  }

  componentDidMount () {
    console.log('life cycle B did mount method');
    return null;
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('Life cycle B should component update method')
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Life cycle B snap shot before update')
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('Life cycle B component did update')
  }

  render () {
    console.log('Life cycle B render method');
    return (
      <div>Hello B</div>
    )
  }
}

export default LifeCycleB