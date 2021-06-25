import React from "react"

const Welcome = (props) => {
  const { welcomeString } = props
  return (
    <h1 data-testid="welcome-message" id="welcome-message">{welcomeString}</h1>
  )
}

export default Welcome
