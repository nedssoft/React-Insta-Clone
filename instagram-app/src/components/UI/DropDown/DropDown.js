
import React from 'react'
import DropDownItem from './DropDownItem'
import DroDownWrapper from './DropDownStyle'

export default function dropDown({ children, show, toggleDropDown, logout }) {
  const style = {
    display: show ? 'flex' : 'none'
  }
  return (
    <DroDownWrapper style={style} onMouseLeave={toggleDropDown}>
      <DropDownItem clicked={logout}>Logout</DropDownItem>
    </DroDownWrapper>
  )
}