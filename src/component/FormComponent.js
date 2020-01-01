import React, { Component } from 'react';

class FormComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    const {userId, title, body} = this.state;
    return(
      <div>
        <form onSubmit={this.submit}>
          <div>
            <input type='text' name='userId' value={userId} onChange={this.changeHandler}/>
          </div>
          <div>
            <input type='text' name='title' value={title} onChange={this.changeHandler}/>
          </div>
          <div>
            <input type='text' name='body' value={body} onChange={this.changeHandler}/>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default FormComponent