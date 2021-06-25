import React from "react"
import WelcomePage from "./components/welcomePage/welcomePage.js"
import ItemPage from "./components/itemPage/itemPage"
import ItemForm from "./components/itemForm/itemForm.js"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

const App = (props) => {
  const { apiHandler } = props
  return (
    <Router>
      <Link to="/" id="home-link">Home</Link>
      <Link to="/items/new" id="new-item-link">Add Item</Link>
      <Switch>
        <Route exact path="/" component={() => <WelcomePage apiHandler={apiHandler} />} />
        <Route path="/items/new" component={() => <ItemForm apiHandler={apiHandler}/>} />
        <Route path="/items/:itemId" render={props => <ItemPage apiHandler={apiHandler} {...props} />} />
      </Switch>
    </Router>
  )
}

export default App
