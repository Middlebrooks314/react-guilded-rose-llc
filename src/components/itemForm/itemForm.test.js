import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect"
import App from "../../App"
import MockApiHandler from "../../services/__mocks__/mockApiHandler"
import ItemForm from "./itemForm"


describe("ItemForm", () => {
  test("renders ItemForm component", () => {
    render(<ItemForm />)
  })
  it("renders a new item form", () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    render(<ItemForm apiHandler={mockApiHandler} />)
    expect(
      screen.getByTestId("new-item-form"),
    ).toBeInTheDocument()
  })
  it("renders form input fields for item attributes", () => {
    const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
    render(<ItemForm apiHandler={mockApiHandler} />)
    expect(
      screen.getByTestId("name-field"),
    ).toBeInTheDocument()
    expect(
      screen.getByTestId("sell_in-field"),
    ).toBeInTheDocument()
    expect(
      screen.getByTestId("quality-field"),
      ).toBeInTheDocument()
    expect(
      screen.getByTestId("submit-button")
    ).toBeInTheDocument()
  })
    test('it submits the form on submit', () => {
      const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
      mockApiHandler.handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault())
      render(<ItemForm apiHandler={mockApiHandler}/>)
      const submitButton = screen.getByTestId('submit-button')

      userEvent.click(submitButton)

      expect(mockApiHandler.handleSubmit).toHaveBeenCalled()
    })
  })


