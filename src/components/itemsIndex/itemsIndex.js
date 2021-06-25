import React from "react"
import { Link } from 'react-router-dom'


const ItemsIndex = (props) => {
  const { items } = props
  const itemsTable = 
    <table data-testid="items-table" className="table">
    <thead>
      <tr>
        <th data-testid="item-header" id="item-header" colSpan="3">Items</th>
      </tr>
      <tr>
        <th data-testid="item-name-header">Item Name</th>
        <th data-testid="item-sellIn-header">Sell In Date</th>
        <th data-testid="item-quality-header">Quality</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td data-testid="item-name"><Link to={`/items/${item.id}`}>{item.name}</Link></td>
          <td data-testid="item-sellIn">{item.sellIn}</td>
          <td data-testid="item-quality">{item.quality}</td>
        </tr>
      ))}
    </tbody>
    </table>

      const errorMessage = <h5 data-testid="no-items-message">No items available</h5>
  return (
    items.length != 0 ? itemsTable : errorMessage
  )
}
export default ItemsIndex
