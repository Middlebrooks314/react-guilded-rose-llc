import React from "react"

const ItemPage = ({match, apiHandler}) => {
  const { params: {itemId} } = match
  const data = apiHandler.getItemData(itemId)

return (
  <div>
    {data && (
      <>
        <h2 data-testid="item-name">Item: {data.name}</h2>
        <h3 data-testid="item-sellIn">Sell In: {data.sellIn}</h3>
        <h3 data-testid="item-quality">Quality: {data.quality}</h3>
      </>
    )}
  </div>
  )
}

export default ItemPage

