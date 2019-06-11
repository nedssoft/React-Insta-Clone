import React from 'react'
import styled from 'styled-components';
import Logo from './Logo'
import SearchInput from './SearchInput'
import SearchIcons from './SearchIcons'

const SearchBar = styled.div`
  width          : 100%;
  height         : 72px;
  padding        : 0.8rem 1rem;
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  border-bottom  : 1px solid #ccc;
  margin-bottom  : 3rem;
  @media (max-width: 500px) {
      flex-direction: column;
      height: max-content;
      padding: 2rem 0;
    }
`
export default function searchBar({ searchHandler, showDropDown, toggleDropDown, logout}) {
  return (
    <SearchBar>
      <Logo />
      <SearchInput  searchHandler={searchHandler}/>
      <SearchIcons showDropDown={showDropDown} toggleDropDown={toggleDropDown} logout={logout}/>
  </SearchBar>
  )
}