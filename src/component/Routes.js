import React , { Component } from 'react';
import axios from 'axios';

class Routes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      posts: [],
      error: ''
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data
        })
      })
      .catch(error => {
        this.setState({
          error: 'Error while retrieving'
        })
      })
  }

  render () {
    let {posts , error} = this.state;
    return(
      <div>
        List of post
        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.title}</div> ) :
            null
        }
        {
          error ? <div>{error}</div> : null
        }
      </div>
    )

  }
}

export default Routes