import React, { Component } from 'react'

export default function withAuthenticate(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}