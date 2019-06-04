import React from 'react'
import './Spinner.css'

export default function Spinner() {
  /** Got from https://loading.io/css/ */
  return (
    <div className="spinner">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}