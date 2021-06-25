import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ItemForm = (props) => {
  const { apiHandler }= props
  const history = useHistory()
  const [name, setName] = useState('')
  const [sellIn, setSellIn] = useState('')
  const [quality, setQuality] = useState('')

  let formData = {
    name: name,
    sellIn: sellIn,
    quality: quality
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    apiHandler.postNewItem(formData)
      .then(response => response.json())
      .then((item) => {
        history.replace(`/items/${item.id}`)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
  
  return (
    <form
    data-testid="new-item-form"
    onSubmit={handleSubmit}
    >
    <br/>
      <label id="item-name-input">
        Name:
        <input
        type="text"
        name="name"
        data-testid="name-field" 
        value={name}
        onChange={e => setName(e.target.value)}
        required
        />
      </label>
      <br/>
      <label id="item-sellIn-input">
        Sell In:
        <input
        type="number"
        min="1"
        name="sellIn"
        data-testid="sellIn-field"
        value={sellIn}
        onChange={e => setSellIn(e.target.value)}
        required
        />
      </label>
      <br/>
      <label id="item-quality-input">
        Quality:
        <input 
        type="number"
        mine="1"
        name="quality"
        data-testid="quality-field"
        value={quality}
        onChange={e => setQuality(e.target.value)}
        required
        />
      </label>
      <br/>
        <input
        type="submit"
        value="Submit"
        data-testid="submit-button"
        />
  </form>
  )
}

export default ItemForm