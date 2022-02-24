import axios from "axios"
import React from "react"

class Reddit extends React.Component{
  state = {
    posts: []
  }

  componentDidMount () {
    axios
      .get(
        `https://www.reddit.com/r/${this.props.subreddit}.json`
    )
      .then(res => {
        const posts = res.data.data.children.map(
          obj => obj.data
        );
        this.setState( { posts })
    })
  }
  

  render () {
    const { posts } = this.state

    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}


function App() {
  return (
    <>
      <Reddit subreddit="reactjs"/>
    </>
  )
}

export default App
