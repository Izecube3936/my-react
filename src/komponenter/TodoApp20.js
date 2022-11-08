import React from 'react'



function TodoApp20({post}) {
    return (
      <article>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
      </article>
    )
  }

export default TodoApp20