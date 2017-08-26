import React from "react"
import "./index.scss"

export default (props) => {
  const { likedPosts } = props
  const count = likedPosts.length

  return (
    <div className="count-component">
      <div>Likes: {count}</div>
    </div>
  )
}