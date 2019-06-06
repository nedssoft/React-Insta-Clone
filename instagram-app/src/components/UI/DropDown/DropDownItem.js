
import React from 'react'

export default function dropDown({children, clicked}) {
  return (
    <li className="dropDown-item" onClick={clicked}>
      { children}
    </li>
  )
}