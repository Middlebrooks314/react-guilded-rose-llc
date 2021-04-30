import React, { Component } from "react"

const Welcome = (props) => {
  const { welcomeString } = props
  return (
    <h1 data-testid="welcome-message">{welcomeString}</h1>
  )
}

export default Welcome
