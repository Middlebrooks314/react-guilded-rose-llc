const apiURL = 'https://safe-wave-09726.herokuapp.com/api/v1'

class ApiHandler {
  async getWelcomeString () {
    const response = await fetch(`${apiURL}/welcome`)
    const text = await response.text()
    const error = await response.error
    return ({ text: text, error: error })
  }

  async getStoreItems () {
    const response = await fetch(`${apiURL}/items`)
    const json = await response.json()
    const error = await response.error
    console.log({ items: json, error: error })
    return ({ items: json, error: error })
  }
}
export default ApiHandler
