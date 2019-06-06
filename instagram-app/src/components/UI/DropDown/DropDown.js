
import React from 'react'
import DropDownItem from './DropDownItem'
import './DropDown.css'

export default function dropDown({ children, show, toggleDropDown, logout }) {
  const style = {
    display: show ? 'flex' : 'none'
  }
  return (
    <ul className="dropDown" style={style} onMouseLeave={toggleDropDown}>
      <DropDownItem clicked={logout}>Logout</DropDownItem>
    </ul>
  )
}