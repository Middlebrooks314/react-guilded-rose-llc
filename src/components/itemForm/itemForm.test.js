import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import ItemForm from "./itemForm"
import MockApiHandler from "../../services/__mocks__/mockApiHandler"

describe("ItemForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

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
      screen.getByTestId("sellIn-field"),
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
      const history = createMemoryHistory()
      mockApiHandler.postNewItem = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ id: 1 })
      }))

      render(
        <Router history={history}>
          <ItemForm apiHandler={mockApiHandler}/>
        </Router>
      )
      const submitButton = screen.getByTestId('submit-button')

      userEvent.click(submitButton)

      expect(mockApiHandler.postNewItem).toHaveBeenCalled()
    })

    test('the history updates to the new item path on submit', async () => {
      const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
      const item = { id: 1 }
      const history = createMemoryHistory()
      mockApiHandler.postNewItem = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(item)
      }))

      render(
        <Router history={history}>
          <ItemForm apiHandler={mockApiHandler}/>
        </Router>
      )
      const submitButton = screen.getByTestId('submit-button')

      userEvent.click(submitButton)

      await waitFor(() => expect(history.location.pathname).toBe(`/items/${item.id}`))
    })

    test('catches when handleSubmit throws an exception', async () => {
      const mockApiHandler = new MockApiHandler("Welcome to the Gilded Rose LLC store!", null)
      const history = createMemoryHistory()
      const error = new Error("Nope")
      mockApiHandler.postNewItem = jest.fn(() => Promise.reject(
        error
      ))

      window.console.error = jest.fn()

      render(
        <Router history={history}>
          <ItemForm apiHandler={mockApiHandler}/>
        </Router>
      )
      const submitButton = screen.getByTestId('submit-button')

      userEvent.click(submitButton)

      await waitFor(() => expect(window.console.error).toHaveBeenLastCalledWith(error.message))
    })
  })
