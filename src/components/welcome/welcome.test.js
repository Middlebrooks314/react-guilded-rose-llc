import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "../../App"
import MockApiHandler from "../../services/__mocks__/mockApiHandler"
import Welcome from "./welcome"

describe("Welcome", () => {
  test("renders Welcome component", () => {
    render(<Welcome />)
  })
  it("renders welcome message", async () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    await render(<App apiHandler={mockApiHandler} isLoaded />)
    expect(
      screen.getByText("Welcome to the Gilded Rose LLC store!"),
    ).toBeInTheDocument()
  })
})
