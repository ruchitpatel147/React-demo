import React , { Component } from 'react';
import axios from 'axios';

class PostForm extends Component{
  constructor (props) {
    super(props)
    this.state = {
      userId : '',
      title : '',
      body : '',
      response: []
    }
  }

  changeHandler = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submit = e => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        this.setState({
          response : [response.data]
        })
      })
      .catch(error => {
        console.log('`````````````', error)
      })
  }

  render () {
    let {userId, title, body, response} = this.state;
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
          <div>
            <button type='submit'>submit</button>
          </div>
        </form>
        <div>
          Response
          {
            response.length ?
              response.map(res => <div key = {res.title}>{res.title}</div>) : null
          }
        </div>
      </div>
    )
  }
}

export default PostForm