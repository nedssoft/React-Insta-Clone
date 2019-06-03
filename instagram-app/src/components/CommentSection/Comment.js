import React from 'react'
import './Comment.css'

export default function comment({comment}) {
  return (
    <div className="comment">
      <p><strong>{comment.username}</strong> {comment.text}</p>
    </div>
  );
}