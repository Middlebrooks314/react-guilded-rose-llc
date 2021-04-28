import React, { Component } from 'react'
import Welcome from './components/welcome/welcome.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.apiHandler = props.apiHandler

    this.state = {
      isLoaded: props.isLoaded || false,
      text: '',
      error: null
    }
  }

  componentDidMount () {
    this.getWelcomeString()
  }

  getWelcomeString () {
    this.apiHandler.getWelcomeString().then(text => {
      this.setState({
        text: text.text,
        error: text.error,
        isLoaded: true
      })
    })
  }

  render () {
    const { isLoaded, error, text } = this.state
    if (error) {
      return <div data-testid="error-message">{error}</div>
    } else if (!isLoaded) {
      return <div data-testid="loading-message">Loading...</div>
    } else {
      return (
          <Welcome welcomeString={text}/>
      )
    }
  }
}

export default App
