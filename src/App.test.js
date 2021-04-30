import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App"
import MockApiHandler from "./services/__mocks__/mockApiHandler"

describe("App", () => {
  const mockApiHandler = new MockApiHandler()
  test("renders App component", () => {
    render(<App apiHandler={mockApiHandler} />)
  })
  it("renders loading message in the <App /> component before the api data returns", () => {
    const mockApiHandler = new MockApiHandler()
    render(<App apiHandler={mockApiHandler} />)
    expect(
      screen.getByTestId("loading-message"),
    ).toBeInTheDocument()
  })
  it("renders welcome message", () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("welcome-message"),
    ).toBeInTheDocument()
  })
  it("renders an error when the api returns an error", async () => {
    const mockApiHandler = new MockApiHandler(null, "error!!")
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("error-message"),
    ).toBeInTheDocument()
  })
  it("renders an items table", async () => {
    const mockApiHandler = new MockApiHandler("Welcome", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByTestId("items-table"),
    ).toBeInTheDocument()
  })
})
