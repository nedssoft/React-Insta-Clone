import React from 'react'
import './Login.css';

export default function login() {
  return (
    <div className="login">
      <h2>Instagram</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Phone number, username, or email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Log In</button>
      </form>
      <div className="separator">
        <div className="line"></div>
        <div>or</div>
        <div className="line"></div>
      </div>
      <p><i className="fab fa-facebook-square"></i> Log In With Facebook</p>
      <p>Forgot Password?</p>
    </div>
  )
}