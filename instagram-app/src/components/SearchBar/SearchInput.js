import React from 'react'
import './SearchBar.css'

export default function searchInput({searchHandler}) {
  return (
    <input type="search" className="search-input" placeholder="search" onChange={searchHandler} />
  );
}