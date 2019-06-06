import React from 'react'
import './SearchBar.css'
import Logo from './Logo'
import SearchInput from './SearchInput'
import SearchIcons from './SearchIcons'

export default function searchBar({ searchHandler, showDropDown, toggleDropDown, logout}) {
  return (
    <div className="search-bar">
      <Logo />
      <SearchInput  searchHandler={searchHandler}/>
      <SearchIcons showDropDown={showDropDown} toggleDropDown={toggleDropDown} logout={logout}/>
  </div>
  )
}