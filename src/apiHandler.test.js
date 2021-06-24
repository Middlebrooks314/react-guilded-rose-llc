import ApiHandler from "./apiHandler"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({})
  })
)

beforeEach(() => {
  fetch.mockClear()
})

test("postNewItem posts to the items endpoint with the correct request options", () => {
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