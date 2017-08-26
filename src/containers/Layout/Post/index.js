import React from "react"
import "./index.scss"

export default (props) => {
  const { 
    post,
    handleClickLikePost,
    handleClickDislikePost
  } = props
  const {
    id,
    title,
    body,
    flag
  } = post

  return (
    <li className="post-component">
      <div>
        <span>{body}</span>
      </div>
      <div>
        #: {id}
      </div>
      <div>
        Description: {title}
      </div>
      <div>
        {
          flag
            ? (
              <button
                className="btn-dislike"
                onClick={(event) => {
                  event.preventDefault()
                  handleClickDislikePost(id)
                }}
              >
                " "
              </button>
            )
            : (
              <button
                className="btn-like"
                onClick={(event) => {
                  event.preventDefault()
                  handleClickLikePost(post)
                }}
              >
                " "
              </button>
            )
        }
      </div>
    </li>
  )
}