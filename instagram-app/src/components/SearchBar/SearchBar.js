import React from 'react'
import './SearchBar.css'
import Logo from './Logo'
import SearchInput from './SearchInput'
import SearchIcons from './SearchIcons'

export default function searchBar() {
  return (
    <div className="search-bar">
      <Logo />
      <SearchInput />
      <SearchIcons />
  </div>
  )
}