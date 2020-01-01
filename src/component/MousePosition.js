import React , { Component }from 'react'


class MousePosition extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: '',
      y: ''
    }
  }

  move = e => {
   this.setState({
     x: e.clientX,
     y: e.clientY
   })
  }

  componentDidMount () {
    window.addEventListener('mousemove', this.move)
  }

  render () {
    return(
      <div>
        x is : {this.state.x}
        y is : {this.state.y}
      </div>
    )
  }

}


export default MousePosition