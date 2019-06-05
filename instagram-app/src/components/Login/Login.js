import React from 'react'
import './Login.css';
export default class Login extends React.Component {
  state = {
    form: {
      username: '',
      password: ''
    },
    
  }
  loginHandler = (event) => {
    event.preventDefault();
    if (this.state.form.username && this.state.form.password) {
      const newUser = {
        id: Date.now(),
        username: this.state.form.username,
        password: this.state.form.password,
      }
      this.props.loginUser(newUser)

    }
  }
  inputChangeHandler = (event) => {
  const targetName = event.target.name;
  const targetValue = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [targetName]: targetValue,
      }
    }))
  }
  // setUser = (user) => {
    // let users = JSON.parse(localStorage.getItem('users'));
    // if (users && users.length) {
    //   const updatedUsers = users.concat(user);
    //   localStorage.setItem('users', JSON.stringify(updatedUsers))
    // } else {
      // localStorage.setItem('user', JSON.stringify(user))
    // }
  // }
  render() {
    return (
      <div className="login">
        <h2>Instagram</h2>
        <form onSubmit={this.loginHandler}>
          <input
            type="text"
            name="username"
            placeholder="Phone number, username, or email"
            onChange={this.inputChangeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.inputChangeHandler}
          />
          <button>Log In</button>
        </form>
        <div className="separator">
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </div>
        <p className="fb"><i className="fab fa-facebook-square"></i> Log In With Facebook</p>
        <p className="forgot-password">Forgot Password?</p>
      </div>
    )
  }
}