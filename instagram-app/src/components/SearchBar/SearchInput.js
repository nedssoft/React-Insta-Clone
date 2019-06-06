import React from 'react'
import styled from 'styled-components';

const SearchInput = styled.input`
  width           : 200px;
  outline         : none;
  border-radius   : 3px;
  text-align      : center;
  padding         : 0.8rem;
  border          : #ffffff;
  font-size       : 1.6rem;
  background-color: rgba(243, 243, 243, 0.383);
  border          : 1px solid #ccc;
  @media (max-width: 500px) {
      width: 100%;
      order: 1;
      margin-bottom: 2rem;
  }
`
export default function searchInput({searchHandler}) {
  return (
    <SearchInput type="search" className="search-input" placeholder="search" onChange={searchHandler} />
  );
}