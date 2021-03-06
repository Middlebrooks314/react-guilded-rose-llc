import { useFetch } from 'react-async'
import React from "react"

class ApiHandler {
  constructor(props) {
    this.url = props.url
  }

  getWelcomeString() {
    const { data, error } = useFetch(`${this.url}/welcome`, {
      headers: { accept: 'application/json' }
    })
    if (error){
      return error.message
    } 
    else {
      return data
    }
  }

  getStoreItems() {
    const { data, error } = useFetch(`${this.url}/items`, {
      headers: { accept: "application/json" }
    })
    if (error) return error.message
    if (data) return data
  }

  getItemData(itemId) {
    const { data } = useFetch(`${this.url}/items/${itemId}`, {
      headers: { accept: "application/json" }
    })
    return data
  }

  postNewItem(formData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_USER_AUTH_CREDENTIALS
      },
      body: JSON.stringify(formData)
  };
    return fetch(`${this.url}/items`, requestOptions)
  }
}
export default ApiHandler
