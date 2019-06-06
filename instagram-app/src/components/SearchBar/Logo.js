import React from 'react'
import styled from 'styled-components'

const HeaderLogo = styled.ul`
  margin: 0;
  padding: 0;
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
  }
  li {
    text-align: center;
    list-style: none;
  }
  li h2 {
    margin: 0;
    padding: 0;
    font-size  : 3rem;
    font-family: 'Satisfy', cursive;
  }
  .logo-img i {
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 500px) {
        font-size: 3rem;
    }
  }
  .sep div {
    height      : 2.5rem;
    border-right: 1px solid black;
    width       : 1px;
    background  : black;
  }
`;
export default function logo() {
  return (
    <HeaderLogo>
      <li className="logo-img"><i className="fab fa-instagram"></i></li>
      <li className="sep">
        <div></div>
      </li>
      <li><h2>Instagram</h2></li>
    </HeaderLogo>
  )
}