import React, { Component } from 'react'
import './App.css'
import Welcome from './components/Welcome.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      welcomeString: ''
    }
  }

  componentDidMount () {
    fetch('https://safe-wave-09726.herokuapp.com/api/v1/welcome', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(response => response.text())
      .then(text => this.setState({ welcomeString: text, loading: false }))
  }

  render () {
    return (
      <div className="App">
        {this.state.loading ? <h4>loading</h4> : <Welcome welcomeString={this.state.welcomeString}/>}
      </div>
    )
  }
}

export default App
