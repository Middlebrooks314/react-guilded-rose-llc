import React from "react"
import Welcome from "../welcome/welcome"
import ItemsIndex from "../itemsIndex/itemsIndex"

const WelcomePage = (props) => {
  const { apiHandler } = props 
  const welcomeString = apiHandler.getWelcomeString()
  const storeItems = apiHandler.getStoreItems()
return (
  <>
    <Welcome welcomeString={welcomeString}/>
          {storeItems && (
    <ItemsIndex items={storeItems}/>
  )}
  </>
  )
}
export default WelcomePage