import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "../../App"
import MockApiHandler from "../../services/__mocks__/mockApiHandler"
import ItemPage from "./itemPage"

describe("ItemPage", () => {
  test("renders ItemPage component", () => {
  const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    render(<ItemPage apiHandler={mockApiHandler} match={{params: {itemId: "1"}}} />)
  })
  it("renders the data for a single item", () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    render(<ItemPage apiHandler={mockApiHandler} match={{params: {itemId: "3"}}} />)
    expect(
      screen.getByTestId("item-name"),
    ).toBeInTheDocument()
    expect(
      screen.getByTestId("item-sell_in"),
    ).toBeInTheDocument()
    expect(
      screen.getByTestId("item-quality"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Item: Bar"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Sell In: 22"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Quality: 10"),
    ).toBeInTheDocument()
  })
})
