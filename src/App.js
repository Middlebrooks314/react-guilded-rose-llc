import React from "react"
import WelcomePage from "./components/welcomePage/welcomePage.js"
import ItemPage from "./components/itemPage/itemPage"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

const App = (props) => {
  const { apiHandler } = props
  return (
    <Router>
      <Link to="/">Home</Link>
      <Route exact path="/" component={() => <WelcomePage apiHandler={apiHandler} />} />
      <Route exact path="/items/:itemId" render={props => <ItemPage apiHandler={apiHandler} {...props} />} />
    </Router>
  )
}

export default App
