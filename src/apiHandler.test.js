import ApiHandler from "./apiHandler"

beforeEach(() => {
  fetch.resetMocks()
})

test("postNewItem posts to the items endpoint with the correct request options", () => {
  fetch.mockResponseOnce({})

  const url = "foo.com"
  const credentials = process.env.REACT_APP_USER_AUTH_CREDENTIALS
  const apiHandler = new ApiHandler({url})

  let formData = {
    name: "hello",
    sellIn: 1,
    quality: 2
  }

  apiHandler.postNewItem(formData)

  const expectedRequestOptions = {
    body: "{\"name\":\"hello\",\"sellIn\":1,\"quality\":2}",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials
    },
    method: "POST"
  }

  expect(fetch).toHaveBeenCalledWith(`${url}/items`, expectedRequestOptions)
})
