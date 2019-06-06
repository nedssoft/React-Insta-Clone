import React, { Component } from 'react'

const withAuthenticate = PostsPage => LoginPage => {
  return class extends Component {
    state = {
      isLoggedIn: false,
    }
    componentDidMount() {
      this.setState({
        isLoggedIn: !!localStorage.getItem('user')
      })
    }
    render() {
      if (this.state.isLoggedIn) {
        return (
          <PostsPage {...this.props} />
        )
      } else {
        return (
          <LoginPage {...this.props} />
        )
      }
    }
  }
}

export default withAuthenticate;