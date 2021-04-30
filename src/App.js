import React, { Component } from "react"
import Welcome from "./components/welcome/welcome.js"
import ItemsIndex from "./components/ItemsIndex/ItemsIndex.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.apiHandler = props.apiHandler

    this.state = {
      isLoaded: props.isLoaded || false,
      text: "",
      error: null,
      items: null,
    }
  }

  componentDidMount() {
    this.getStoreItems()
    this.getWelcomeString()
  }

  getStoreItems() {
    this.apiHandler.getStoreItems().then((json) => {
      this.setState({
        items: json.items,
        error: json.error,
      })
    })
  }

  getWelcomeString() {
    this.apiHandler.getWelcomeString().then((text) => {
      this.setState({
        text: text.text,
        error: text.error,
        isLoaded: true,
      })
    })
  }

  render() {
    const {
      isLoaded, error, text, items,
    } = this.state
    if (error) {
      return <div data-testid="error-message">{error}</div>
    } if (!isLoaded) {
      return <div data-testid="loading-message">Loading...</div>
    }
    return (
      <div>
        <Welcome welcomeString={text} />
        {this.state.items && (
          <ItemsIndex items={items} />
        )}
      </div>
    )
  }
}

export default App
