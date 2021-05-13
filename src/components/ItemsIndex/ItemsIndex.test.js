import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "../../App"
import MockApiHandler from "../../services/__mocks__/mockApiHandler"

describe("ItemsIndex", () => {
  it("renders a no items message when there are no items available", async () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null, [])
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("no-items-message"),
    ).toBeInTheDocument()
  })
  it("renders a table with an items header", async () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("item-header"),
    ).toBeInTheDocument()
  })
  it("renders a table with an item name header", async () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("item-name-header"),
    ).toBeInTheDocument()
  })
  it("renders a table with an item sell in date header", async () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      expect(
        screen.getByTestId("item-sellIn-header"),
      ).toBeInTheDocument(),
    )
  })
  it("renders a table with a quality score header", async () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("item-quality-header"),
    ).toBeInTheDocument()
  })
  it("renders data in the item name column", async () => {
    const mockApiHandler = new MockApiHandler("Welcome", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    const itemNames = screen.queryAllByTestId("item-name")
    expect(itemNames.length).toEqual(5)
  })
  it("renders data in the item sellIn column", async () => {
    const mockApiHandler = new MockApiHandler("Welcome", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    const itemNames = screen.queryAllByTestId("item-sellIn")
    expect(itemNames.length).toEqual(5)
  })
  it("renders data in the item quality column", async () => {
    const mockApiHandler = new MockApiHandler("Welcome", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    const itemNames = screen.queryAllByTestId("item-quality")
    expect(itemNames.length).toEqual(5)
  })
  it("renders a table with a single item", async () => {
    const items =[
      {
        id: 1, name: "Aged Brie", sellIn: 3, quality: 20,
      }]
      const mockApiHandler = new MockApiHandler("Welcome", null, items)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("items-table"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Aged Brie"),
    ).toBeInTheDocument()
  })
  it("renders a table with multiple items", async () => {
    const items = [
      {
        id: 1, name: "Aged Brie", sellIn: 3, quality: 20,
      },
      {
        id: 2,
        name: "Foo",
        sellIn: 25,
        quality: 2,
      },
      {
        id: 3,
        name: "Bar",
        sellIn: 22,
        quality: 10,
      },
      {
        id: 4,
        name: "Lorem",
        sellIn: 2,
        quality: 5,
      },
      {
        id: 5,
        name: "Ipsum",
        sellIn: 4,
        quality: 16,
      },
    ]
    const mockApiHandler = new MockApiHandler("Welcome", null, items)
    await render(<App apiHandler={mockApiHandler}/>)
    expect(
      screen.getByTestId("items-table"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Aged Brie"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Foo"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Bar"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Lorem"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Ipsum"),
    ).toBeInTheDocument()
  })
})
