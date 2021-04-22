import React, { Component } from 'react'

const Welcome = (props) => {
  const { welcomeString } = props
  return (
    <h1>{welcomeString}</h1>
  )
}

export default Welcome
