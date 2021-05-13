import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ItemForm = (props) => {
  const { apiHandler }= props
  const history = useHistory()
  const [name, setName] = useState('')
  const [sell_in, setSellIn] = useState('')
  const [quality, setQuality] = useState('')


  let formData = {
    name: name,
    sell_in: sell_in,
    quality: quality
  }

  
  return (
    <form
    data-testid="new-item-form"
    onSubmit={(event) => {apiHandler.handleSubmit(event, formData, history)}}
    >
    <br/>
      <label>
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
      <label>
        Sell In:
        <input
        type="number"
        min="1"
        name="sell_in"
        data-testid="sell_in-field"
        value={sell_in}
        onChange={e => setSellIn(e.target.value)}
        required
        />
      </label>
      <br/>
      <label>
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