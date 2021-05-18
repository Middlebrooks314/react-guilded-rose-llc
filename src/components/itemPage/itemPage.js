import React from "react"

const ItemPage = ({match, apiHandler}) => {
  const { params: {itemId} } = match
  const data = apiHandler.getItemData(itemId)

return (
  <div>
    {data && (
      <>
        <h2 data-testid="item-name">Item: {data.name}</h2>
        <h3 data-testid="item-sell_in">Sell In: {data.sell_in}</h3>
        <h3 data-testid="item-quality">Quality: {data.quality}</h3>
      </>
    )}
  </div>
  )
}

export default ItemPage

