import React, { Component } from "react"

const ItemsIndex = (props) => {
  const { items } = props.items
  return (
    <div>

      {items
        ? (
  <table data-testid="items-table">
    <thead>
      <tr>
        <th data-testid="item-header">Items</th>
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
          <td data-testid="item-name">{item.name}</td>
          <td data-testid="item-sellIn">{item.sell_in}</td>
          <td data-testid="item-quality">{item.quality}</td>
        </tr>
      ))}
    </tbody>
  </table>
        )
      : <h4 data-testid="no-items-message">No items available.</h4>}
    </div>
  )
}

export default ItemsIndex
