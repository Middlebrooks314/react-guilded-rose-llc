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

  handleSubmit(event, formData, history){
    event.preventDefault()
    this.postNewItem(formData, history)
  }

  async postNewItem(formData, history) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    await fetch(`${this.url}/items`, requestOptions)
        .then(response => response.json())
        .then((item) => {
          history.replace(`/items/${item.id}`)
        })
        .catch(error => {
          return <h3>{error.message}</h3>
        })
  }
}
export default ApiHandler
