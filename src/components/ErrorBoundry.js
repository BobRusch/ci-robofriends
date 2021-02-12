import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMsg: info, error })
  }

  render() {
    console.log('ErrorBoundary')
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
}

export default ErrorBoundary
