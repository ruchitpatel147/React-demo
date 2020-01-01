import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {

  constructor (props) {
    super(props)
    this.cbRef = React.createRef();
  }

  clickHandler = () => {
    this.cbRef.current.focus();
  }

  render () {
    return(
      <div>
        <FRInput ref={this.cbRef}/>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default FRParentInput