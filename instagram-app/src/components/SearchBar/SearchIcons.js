import React from 'react'
import styled from 'styled-components'
import DropDown from '../UI/DropDown/DropDown'

const Icons = styled.ul`
  padding        : 0 0.8rem;
  display        : flex;
  width          : 200px;
  height         : 100%;
  justify-content: space-between;
  align-items    : center;
  height         : 50%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
    margin: 2rem auto;
  }
  li i {
    font-size: 1.8rem;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
`
export default function searchIcons({ showDropDown, toggleDropDown, logout }) {
  return (
    <Icons>
      <li><i className="far fa-compass"></i></li>
      <li><i className="far fa-heart"></i></li>
      <li><i className="far fa-user" onMouseEnter={toggleDropDown}></i>
        <DropDown show={showDropDown} toggleDropDown={toggleDropDown} logout={logout} />
      </li>
    </Icons>
  )
}