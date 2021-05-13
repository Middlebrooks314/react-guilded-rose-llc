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
  it("renders welcome message", () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    render(<App apiHandler={mockApiHandler} />)
    expect(
      screen.getByTestId("welcome-message"),
    ).toBeInTheDocument()
  })
  it("renders an items table", async () => {
    const mockApiHandler = new MockApiHandler("Welcome", null)
    await render(<App apiHandler={mockApiHandler} />)
    expect(
      screen.getByTestId("items-table"),
    ).toBeInTheDocument()
  })
})
