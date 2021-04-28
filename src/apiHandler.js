const apiURL = 'https://safe-wave-09726.herokuapp.com/api/v1/welcome'

class ApiHandler {
  async getWelcomeString () {
    const response = await fetch(apiURL)
    const text = await response.text()
    const error = await response.error
    return ({ text: text, error: error })
  }
}
export default ApiHandler
