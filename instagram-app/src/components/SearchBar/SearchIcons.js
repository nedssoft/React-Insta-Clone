import React from 'react'
import './SearchBar.css'
import DropDown from '../UI/DropDown/DropDown'

export default function searchIcons({ showDropDown, toggleDropDown, logout}) {
  return (
  
    <ul className="icons">
      <li><i className="far fa-compass"></i></li>
      <li><i className="far fa-heart"></i></li>
      <li><i className="far fa-user" onMouseEnter={toggleDropDown}></i>
        <DropDown show={showDropDown} toggleDropDown={toggleDropDown} logout={logout} />
      </li>
    </ul>
  )
}