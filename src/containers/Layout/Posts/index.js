import React from "react"
import PostComponent from "../Post"
import "./index.scss"

export default class PostsContainer extends React.PureComponent {
  state = {
    posts: []
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps({ posts, likedPosts }) {
    const updatedProducts = posts.reduce((acc, post) => {
      acc.push({ 
        ...post,
        flag: !!~likedPosts.findIndex(({ id }) => id == post.id)
      })
      return acc
    }, [])
    this.setState({
      posts: updatedProducts
    })
  }

  render() {
    const { posts } = this.state
    const { 
      handleClickLikePost,
      handleClickDislikePost
    } = this.props
    
    return (
      <ul className="posts-container">
        {
          posts.map((post, index) => <PostComponent 
            post={post}
            handleClickDislikePost={handleClickDislikePost}
            handleClickLikePost={handleClickLikePost}
            key={index}
          />)
        }
      </ul>
    )
  }
}