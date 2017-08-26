import React from "react"
import CountComponent from "./Header"
import PostsContainer from "./Posts"
import { LIKED_POSTS_KEY } from "./constants"
import { setLocalStorage, getLocalStorage } from "./helpers"
import { getPostsApi } from "./Posts/api"
import "./index.scss"

const DEFAULT_LIKED_POSTS = []
const DEFAULT_POSTS = []

export default class LayoutContainer extends React.PureComponent {
  state = {
    posts: DEFAULT_POSTS,
    likedPosts: DEFAULT_LIKED_POSTS
  }
  
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const posts = await getPostsApi()
    const likedPosts = getLocalStorage(LIKED_POSTS_KEY)

    this.setState({
      posts,
      likedPosts
    })
  }

  handleClickLikePost = (post) => {
    this.setState(({ likedPosts }) => {
      likedPosts.push(post)
      return {
        likedPosts: [...likedPosts] 
      }
    }, () => setLocalStorage(LIKED_POSTS_KEY, this.state.likedPosts))
  }

  handleClickDislikePost = (id) => {
    this.setState(({ likedPosts }) => ({
      likedPosts: likedPosts.filter(post => post.id != id)
    }), () => setLocalStorage(LIKED_POSTS_KEY, this.state.likedPosts))
  }

  render() {
    const { 
      likedPosts, 
      posts 
    } = this.state

    return (
      <div className="layout-container">
        <CountComponent
        likedPosts={likedPosts}
        />
        <PostsContainer
          posts={posts}
          likedPosts={likedPosts}
          handleClickLikePost={this.handleClickLikePost} 
          handleClickDislikePost={this.handleClickDislikePost}
        />
      </div>
    )
  }
}